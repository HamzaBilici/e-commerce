import bannerImage from "../assets/banner1.png";

function BannerArea() {
  return (
    <>
      <section className="w-full flex justify-center">
        <div className="max-w-296.25 w-full flex gap-3.75 my-20">
          <div className="grow max-w-1/2 max-h-143 h-143 relative overflow-hidden flex flex-col-reverse">
            <img className="absolute w-full h-auto" src={bannerImage} alt="" />
            <div className="bg-[#2D8BC0BF] z-2  flex flex-col gap-2.5 max-w-105 max-h-59.5 w-full h-full pl-16.5 justify-center">
              <h6 className="text-white tracking-[0.1px] font-montserrat font-bold text-[24px] leading-8 max-w-48">
                Top Product Of the Week
              </h6>
              <button className="font-montserrat font-bold text-[12px] leading-5.5 tracking-[0.2px] text-white max-w-48 px-10 py-3.75 border border-white rounded-md">
                EXPLORE ITEMS
              </button>
            </div>
          </div>

          <div className="max-w-1/2 max-h-143 h-143 overflow-hidden w-full flex flex-col gap-5.5">
            <div className="grow  max-h-72.25 h-full relative overflow-hidden flex flex-col-reverse">
              <img
                className="absolute w-full h-auto"
                src={bannerImage}
                alt=""
              />
              <div className="bg-[#2D8BC0BF] z-2  flex flex-col gap-2.5 max-w-86.75 max-h-43.25 w-full h-full pl-16.5 justify-center">
                <h6 className="text-white  font-montserrat  font-normal text-[20px] leading-7.5 tracking-[0.2px]">
                  Top Product Of the Week
                </h6>
                <button className="font-montserrat font-bold text-[12px] leading-5.5 tracking-[0.2px] text-white max-w-48 px-10 py-3.75 border border-white rounded-md">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>

            <div className="grow  max-h-72.25 h-full relative overflow-hidden flex flex-col-reverse">
              <img
                className="absolute w-full h-auto"
                src={bannerImage}
                alt=""
              />
              <div className="bg-[#2D8BC0BF] z-2  flex flex-col gap-2.5 max-w-86.75 max-h-43.25 w-full h-full pl-16.5 justify-center">
                <h6 className="text-white  font-montserrat  font-normal text-[20px] leading-7.5 tracking-[0.2px]">
                  Top Product Of the Week
                </h6>
                <button className="font-montserrat font-bold text-[12px] leading-5.5 tracking-[0.2px] text-white max-w-48 px-10 py-3.75 border border-white rounded-md">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BannerArea;
