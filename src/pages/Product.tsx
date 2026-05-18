import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProductDetail } from "../store/actions/productActions";
import { ArrowLeft } from "lucide-react";

import ProductTopArea from "../layout/Product/productTopArea";
import ProductInformationArea from "../layout/Product/productInformationArea";
import ProductListArea from "../layout/Product/productListArea";
import Brands from "../layout/Home/brands";

function Product() {
  const { productId } = useParams<{ productId: string }>();

  const history = useHistory();
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.product.currentProduct);
  const fetchState = useAppSelector((state) => state.product.detailFetchState);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
  }, [productId, dispatch]);

  if (fetchState === "FETCHING" || fetchState === "IN_PROGRESS") {
    return (
      <div className="w-full h-[60vh] flex flex-col justify-center items-center gap-4 bg-white lg:bg-[#FAFAFA]">
        <div className="w-12 h-12 border-4 border-[#23A6F0] border-t-transparent rounded-full animate-spin"></div>
        <p className="font-montserrat text-[#737373] animate-pulse font-medium">
          Loading product details...
        </p>
      </div>
    );
  }

  if (fetchState === "FAILED" || !product) {
    return (
      <div className="w-full text-center py-20 font-montserrat font-bold text-red-500 bg-white lg:bg-[#FAFAFA]">
        Product could not be loaded. Please try again later.
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 bg-white lg:bg-[#FAFAFA]">
        <button
          onClick={() => history.goBack()}
          className="flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] font-montserrat font-bold text-sm transition-colors py-4 focus:outline-none"
        >
          <ArrowLeft size={16} />
          Back to Shop
        </button>

        <ProductTopArea product={product} />
        <ProductInformationArea product={product} />
        <ProductListArea />
        <Brands />
      </div>
    </>
  );
}

export default Product;
