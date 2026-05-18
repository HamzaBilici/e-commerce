import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/actions/productActions";
import ProductList from "../../components/productList";

function ProductArea() {
  const dispatch = useAppDispatch();
  const fetchState = useAppSelector((state) => state.product.fetchState);

  return (
    <section className="w-full flex justify-center font-montserrat">
      <div className="max-w-281 w-full flex flex-col items-center gap-6 my-20 max-lg:mx-15 min-h-[300px]">
        {fetchState === "FETCHING" && (
          <div className="flex flex-col justify-center items-center py-10 gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent border-[#23A6F0]"></div>
            <p className="text-[#737373] font-medium animate-pulse">
              Products loading...
            </p>
          </div>
        )}

        {fetchState === "FAILED" && (
          <div className="text-center py-10">
            <p className="text-red-500 font-bold text-lg">
              Failed to load products.
            </p>
            <button
              onClick={() => dispatch(fetchProducts())}
              className="mt-4 bg-[#23A6F0] text-white px-5 py-2 rounded font-bold text-sm"
            >
              Try Again
            </button>
          </div>
        )}

        {fetchState === "FETCHED" && <ProductList />}
      </div>
    </section>
  );
}

export default ProductArea;
