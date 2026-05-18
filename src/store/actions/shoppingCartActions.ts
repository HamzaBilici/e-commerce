export const addToCart = (product: any) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (productId: number | string) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const updateCartItemCount = (
  productId: number | string,
  change: number,
) => ({
  type: "UPDATE_CART_ITEM_COUNT",
  payload: { productId, change },
});

export const toggleCartItemCheck = (productId: number | string) => ({
  type: "TOGGLE_CART_ITEM_CHECK",
  payload: productId,
});

import { axiosInstance } from "../../api/axiosInstance";
import type { Dispatch } from "redux";
import { toast } from "react-toastify";

export const fetchAddresses = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axiosInstance.get("/user/address");
      dispatch({ type: "SET_ADDRESS_LIST", payload: response.data });
    } catch (error) {
      console.error("Adres çekme hatası:", error);
    }
  };
};

export const addAddress = (addressData: any) => {
  return async (dispatch: any) => {
    try {
      await axiosInstance.post("/user/address", addressData);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Adres ekleme hatası:", error);
    }
  };
};

export const updateAddress = (addressData: any) => {
  return async (dispatch: any) => {
    try {
      await axiosInstance.put("/user/address", addressData);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Adres güncelleme hatası:", error);
    }
  };
};

export const deleteAddress = (addressId: number) => {
  return async (dispatch: any) => {
    try {
      await axiosInstance.delete(`/user/address/${addressId}`);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Adres silme hatası:", error);
    }
  };
};

export const fetchCards = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axiosInstance.get("/user/card");
      dispatch({ type: "SET_CARD_LIST", payload: response.data });
    } catch (error) {
      console.error("Kartlar çekilirken hata oluştu:", error);
    }
  };
};

export const addCard = (cardData: {
  card_no: string;
  expire_month: number;
  expire_year: number;
  name_on_card: string;
}) => {
  return async (dispatch: any) => {
    try {
      await axiosInstance.post("/user/card", cardData);
      dispatch(fetchCards());
    } catch (error) {
      console.error("Kart ekleme hatası:", error);
    }
  };
};

export const updateCard = (cardData: {
  id: string | number;
  card_no: string;
  expire_month: number;
  expire_year: number;
  name_on_card: string;
}) => {
  return async (dispatch: any) => {
    try {
      await axiosInstance.put("/user/card", cardData);
      dispatch(fetchCards());
    } catch (error) {
      console.error("Kart güncelleme hatası:", error);
    }
  };
};

export const deleteCard = (cardId: string | number) => {
  return async (dispatch: any) => {
    try {
      await axiosInstance.delete(`/user/card/${cardId}`);
      dispatch(fetchCards());
    } catch (error) {
      console.error("Kart silme hatası:", error);
    }
  };
};

export const CLEAR_CART = "CLEAR_CART";

export const createOrder = (orderPayload: any, history: any) => {
  return async (dispatch: any) => {
    try {
      const response = await axiosInstance.post("/order", orderPayload);
      console.log(response)

      toast.success("Tebrikler! Siparişiniz başarıyla oluşturuldu.");

      dispatch({ type: CLEAR_CART });

      history.push("/");
    } catch (error: any) {
      console.error("Sipariş oluşturma hatası:", error);
      toast.error(
        error.response?.data?.message ||
          "Sipariş oluşturulurken bir hata oluştu.",
      );
    }
  };
};

export const SET_ORDER_HISTORY = "SET_ORDER_HISTORY";

export const fetchOrderHistory = () => {
  return async (dispatch: any) => {
    try {
      const response = await axiosInstance.get("/order");
      dispatch({ type: SET_ORDER_HISTORY, payload: response.data });
    } catch (error) {
      console.error("Sipariş geçmişi çekilirken hata oluştu:", error);
    }
  };
};
