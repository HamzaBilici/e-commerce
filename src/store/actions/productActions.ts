export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

export const setLimit = (limit: any) => ({ type: "SET_LIMIT", payload: limit });
export const setOffset = (offset: any) => ({
  type: "SET_OFFSET",
  payload: offset,
});
export const setFilter = (filter: any) => ({
  type: "SET_FILTER",
  payload: filter,
});

import { axiosInstance } from "../../api/axiosInstance";
import type { Dispatch } from "redux";

export const setProductList = (products: any[]) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});

export const setTotal = (total: number) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (fetchState: string) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});
export const setProductParams = (params: {
  category?: string | number;
  filter?: string;
  sort?: string;
  offset?: number;
  limit?: number;
}) => ({
  type: "SET_PRODUCT_PARAMS",
  payload: params,
});

export const setCategories = (categories: any) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const fetchCategories = () => {
  return async (dispatch: Dispatch, getState: any) => {
    const { categories } = getState().product;

    if (categories && categories.length > 0) return;

    try {
      const response = await axiosInstance.get("/categories");
      dispatch({ type: "SET_CATEGORIES", payload: response.data });
    } catch (error) {
      console.error("Categories fetch error:", error);
    }
  };
};

export const fetchProducts = (
  categoryIdFromUrl?: string | number,
  offsetFromPagination?: number,
) => {
  return async (dispatch: any, getState: any) => {
    dispatch({ type: "SET_FETCH_STATE", payload: "FETCHING" });

    const { filter, sort, limit, offset: storeOffset } = getState().product;
    const finalOffset =
      offsetFromPagination !== undefined ? offsetFromPagination : storeOffset;

    try {
      const params = new URLSearchParams();
      if (categoryIdFromUrl)
        params.append("category", categoryIdFromUrl.toString());
      if (filter) params.append("filter", filter);
      if (sort) params.append("sort", sort);

      params.append("limit", limit.toString());
      params.append("offset", finalOffset.toString());

      const response = await axiosInstance.get(
        `/products?${params.toString()}`,
      );

      dispatch({ type: "SET_PRODUCT_LIST", payload: response.data.products });
      dispatch({ type: "SET_TOTAL", payload: response.data.total });
      dispatch({ type: "SET_FETCH_STATE", payload: "FETCHED" });
    } catch (error) {
      console.error("Fetch hatası:", error);
      dispatch({ type: "SET_FETCH_STATE", payload: "FAILED" });
    }
  };
};

export const fetchProductDetail = (productId: string | number) => {
  return async (dispatch: any) => {
    dispatch({ type: "SET_DETAIL_FETCH_STATE", payload: "FETCHING" });

    try {
      const response = await axiosInstance.get(`/products/${productId}`);

      dispatch({ type: "SET_CURRENT_PRODUCT", payload: response.data });
      dispatch({ type: "SET_DETAIL_FETCH_STATE", payload: "FETCHED" });
    } catch (error) {
      console.error("Product detail fetch error:", error);
      dispatch({ type: "SET_DETAIL_FETCH_STATE", payload: "FAILED" });
    }
  };
};
