import bannerImage from "../assets/Herobanner.png";

function MainHeroBanner() {
  return (
    <>
      <section className="w-full flex justify-center my-13">
        <div className="max-w-323 w-full h-155 relative  bg-linear-to-r from-[#96E9FB] to-[#ABECD6] content-center">
          
          <img
            className="max-w-174 absolute bottom-0 -right-33 z-2"
            src={bannerImage}
          />
          <div className="rounded-full w-125 h-125 bg-white right-0 top-0 absolute z-1"></div>
          <div className="rounded-full w-20 h-20 bg-white right-120 top-0 absolute z-1"></div>
          <div className="rounded-full w-8 h-8 bg-white -right-12 top-77 absolute z-3"></div>
          <div className="rounded-full w-3.5 h-3.5 bg-[#977DF4] -right-12 top-45 absolute z-3"></div>
          <div className="w-137 ml-31.5 flex gap-7.5 flex-col">
            <h5 className="text-[#2A7CC7] tracking-[0.1px] font-montserrat font-bold text-[16px] leading-6">
              SUMMER 2020
            </h5>
            <h1 className="text-[#252B42] tracking-[0.2px] font-montserrat font-bold text-[56px] leading-20">
              NEW COLLECTION
            </h1>
            <h4 className="text-[#737373] tracking-[0.2px] font-montserrat font-normal text-[20px] leading-7.5 max-w-94">
              We know how large objects will act, but things on a small scale.
            </h4>
            <button className="bg-[#23A6F0] text-white max-w-55  tracking-[0.1px] font-montserrat font-bold text-[22px] leading-8 px-10 py-3.5 rounded-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainHeroBanner;
