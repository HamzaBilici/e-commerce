import BestProductCard from "../assets/bpCardimg.jpg";

function BestProductsCard() {
  return (
    <>
      <div className="w-45.75 flex flex-col">
        <div className="w-full max-h-59.5 overflow-hidden">
          <img className="w-full h-auto" src={BestProductCard} alt="" />
        </div>
        <div className="flex flex-col gap-2.5 my-7.5">
          <h5 className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-[#252B42]">
            Graphic Design
          </h5>
          <p className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center text-[#737373]">
            English Department
          </p>
          <div className="flex justify-center gap-1.25">
            <span className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-[#BDBDBD]">$16.48</span>
            <span className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-[#23856D]">$6.48</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestProductsCard;
