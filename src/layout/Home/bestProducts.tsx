
import LayoutHeader from "../../components/layoutHeader";
import ProductArea from "../../components/productList";


function BestProducts() {
  return (
    <>
      <section className="w-full flex justify-center">
        <div className="max-w-281 flex flex-col items-center gap-6 my-20 max-lg:mx-15">
          <LayoutHeader topText="Featured Products" midText="BESTSELLER PRODUCTS" bottomText="Problems trying to resolve the conflict between"/>

<ProductArea limit={8}/>
          <button className="font-montserrat leading-5.5 font-bold text-[12px] tracking-[0.2px] text-center text-[#23A6F0] border border-[#23A6F0] py-3.5 px-10 rounded-md max-w-65.25">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </section>
    </>
  );
}

export default BestProducts;
