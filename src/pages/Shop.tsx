import CategoryArea from "../layout/Shop/categoryArea";
import ProductArea from "../layout/Shop/productArea";
import FilterArea from "../layout/Shop/filterArea";
import Brands from "../layout/Home/brands";
import PaginationArea from "../layout/Shop/paginationArea";

function Shop() {
  return (
    <>
      <CategoryArea />
      <FilterArea />
      <ProductArea />
      <PaginationArea />
      <Brands />
      <div className="my-12"></div>
    </>
  );
}
export default Shop;



