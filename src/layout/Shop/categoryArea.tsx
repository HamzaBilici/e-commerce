import { ChevronRight } from "lucide-react";
import CategoryImage from "../../assets/category1.jpg";

function CategoryArea() {
  return (
    <>
      <section className="flex justify-center flex-col items-center bg-[#FAFAFA] ">
        <div className="max-w-262.25 flex justify-between w-full my-7.5 items-center max-lg:flex-col  max-lg:gap-17  max-lg:py-6">
          <div>
            <h2 className="font-montserrat font-bold text-[24px] leading-8 tracking-[0.1px] text-center text-[#252B42]">
              Shop
            </h2>
          </div>
          <div>
            <ul className="flex">
              <li className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center flex flex-row text-[#252B42]">
                Home <ChevronRight />
              </li>
              <li className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center flex flex-row text-[#BDBDBD]">
                Shop{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-272 flex gap-4 mb-12 max-lg:flex-col max-lg:w-full max-lg:px-10.5 max-lg:items-center">
          <div className="w-51.25 h-55.75 relative overflow-hidden max-lg:w-full max-lg:h-75 max-lg:max-w-112.5">
            <img
              className="h-full w-auto object-cover absolute z-1"
              src={CategoryImage}
              alt=""
            />
            <div className="h-full w-full  absolute bg-[#21212140] z-2"></div>
            <div className="flex flex-col h-full w-full justify-center items-center gap-2.5 ">
              <h6 className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-white z-4">
                CLOTHS
              </h6>
              <h6 className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-white z-4">
                5 Items
              </h6>
            </div>
          </div>

          <div className="w-51.25 h-55.75 relative overflow-hidden max-lg:w-full max-lg:h-75 max-lg:max-w-112.5">
            <img
              className="h-full w-auto object-cover absolute z-1"
              src={CategoryImage}
              alt=""
            />
            <div className="h-full w-full  absolute bg-[#21212140] z-2"></div>
            <div className="flex flex-col h-full w-full justify-center items-center gap-2.5 ">
              <h6 className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-white z-4">
                CLOTHS
              </h6>
              <h6 className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-white z-4">
                5 Items
              </h6>
            </div>
          </div>
          <div className="w-51.25 h-55.75 relative overflow-hidden max-lg:w-full max-lg:h-75 max-lg:max-w-112.5">
            <img
              className="h-full w-auto object-cover absolute z-1"
              src={CategoryImage}
              alt=""
            />
            <div className="h-full w-full  absolute bg-[#21212140] z-2"></div>
            <div className="flex flex-col h-full w-full justify-center items-center gap-2.5 ">
              <h6 className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-white z-4">
                CLOTHS
              </h6>
              <h6 className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-white z-4">
                5 Items
              </h6>
            </div>
          </div>
          <div className="w-51.25 h-55.75 relative overflow-hidden max-lg:w-full max-lg:h-75 max-lg:max-w-112.5">
            <img
              className="h-full w-auto object-cover absolute z-1"
              src={CategoryImage}
              alt=""
            />
            <div className="h-full w-full  absolute bg-[#21212140] z-2"></div>
            <div className="flex flex-col h-full w-full justify-center items-center gap-2.5 ">
              <h6 className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-white z-4">
                CLOTHS
              </h6>
              <h6 className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-white z-4">
                5 Items
              </h6>
            </div>
          </div>
          <div className="w-51.25 h-55.75 relative overflow-hidden max-lg:w-full max-lg:h-75 max-lg:max-w-112.5">
            <img
              className="h-full w-auto object-cover absolute z-1"
              src={CategoryImage}
              alt=""
            />
            <div className="h-full w-full  absolute bg-[#21212140] z-2"></div>
            <div className="flex flex-col h-full w-full justify-center items-center gap-2.5 ">
              <h6 className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-white z-4">
                CLOTHS
              </h6>
              <h6 className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-white z-4">
                5 Items
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryArea;
