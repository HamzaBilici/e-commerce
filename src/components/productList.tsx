import { useAppSelector } from "../store/hooks";
import BestProductsCard from "./bestProductsCard";

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  images?: { url: string }[];
  rating: number;
}

interface ProductListProps {
  limit?: number;
}

function ProductList({ limit }: ProductListProps) {
  const productList: IProduct[] = useAppSelector(
    (state) => state.product.productList,
  );

  if (!productList || productList.length === 0) {
    return (
      <div className="text-center py-10 text-[#737373] font-montserrat">
        No products found.
      </div>
    );
  }

  const displayedProducts = limit ? productList.slice(0, limit) : productList;

  return (
    <>
      <div className="flex w-full flex-wrap gap-7.5 justify-center my-7.5 max-lg:flex-col max-lg:items-center">
        {displayedProducts.map((item) => (
          <BestProductsCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
