import { BookOpenText, LaptopMinimalCheck } from "lucide-react";
function ChartArea() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center">
        <div className="max-w-281 flex flex-col items-center gap-6 my-20">
          <div className="max-w-173 w-full flex flex-col gap-2.5">
            <h2 className="font-montserrat leading-7.5 font-normal text-[20px] tracking-[0.2px] text-center text-[#737373]">
              Featured Products
            </h2>
            <h3 className="font-montserrat leading-7.5 font-bold text-[24px] tracking-[0.1px] text-center text-[#252B42]">
              THE BEST SERVICES
            </h3>
            <p className="font-montserrat leading-7.5 font-normal text-[14px]  tracking-[0.2px] text-center text-[#737373]">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-82 flex flex-col items-center gap-5 py-8.75">
            <BookOpenText size={60} color="#23A6F0" />
            <h3 className="font-montserrat font-bold text-[24px] leading-8 tracking-[0.1px] text-center text-[#252B42]">
              Easy Wins
            </h3>
            <p className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-center text-[#737373]">
              Get your best looking smile now!
            </p>
          </div>

          <div className="w-82 flex flex-col items-center gap-5 py-8.75">
            <BookOpenText size={60} color="#23A6F0" />
            <h3 className="font-montserrat font-bold text-[24px] leading-8 tracking-[0.1px] text-center text-[#252B42]">
              Easy Wins
            </h3>
            <p className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-center text-[#737373]">
              Get your best looking smile now!
            </p>
          </div>
                    <div className="w-82 flex flex-col items-center gap-5 py-8.75">
            <BookOpenText size={60} color="#23A6F0" />
            <h3 className="font-montserrat font-bold text-[24px] leading-8 tracking-[0.1px] text-center text-[#252B42]">
              Easy Wins
            </h3>
            <p className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-center text-[#737373]">
              Get your best looking smile now!
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
export default ChartArea;
