import BestProductsCard from "../components/bestProductsCard";

function BestProducts() {
  return (
    <>
      <section className="w-full flex justify-center">
        <div className="max-w-281 flex flex-col items-center gap-6 my-20">
          <div className="max-w-173 w-full flex flex-col gap-2.5">
            <h2 className="font-montserrat leading-7.5 font-normal text-[20px] tracking-[0.2px] text-center text-[#737373]">
              Featured Products
            </h2>
            <h3 className="font-montserrat leading-7.5 font-bold text-[24px] tracking-[0.1px] text-center text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
            <p className="font-montserrat leading-7.5 font-normal text-[14px]  tracking-[0.2px] text-center text-[#737373]">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-7.5 justify-center my-7.5">
            <BestProductsCard />
            <BestProductsCard />
            <BestProductsCard />
            <BestProductsCard />
            <BestProductsCard />
            <BestProductsCard />
            <BestProductsCard />
            <BestProductsCard />
            <BestProductsCard />
            <BestProductsCard />
          </div>
          <button className="font-montserrat leading-5.5 font-bold text-[12px] tracking-[0.2px] text-center text-[#23A6F0] border border-[#23A6F0] py-3.5 px-10 rounded-md max-w-65.25">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </section>
    </>
  );
}

export default BestProducts;
