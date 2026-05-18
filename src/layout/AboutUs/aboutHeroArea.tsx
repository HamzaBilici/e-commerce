import heroImage from "../../assets/abouthero.png";

const AboutHeroArea = () => {
  return (
    <section className="relative overflow-hidden bg-white font-montserrat min-h-150 lg:min-h-200 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 order-1 lg:order-1 pt-10 lg:pt-0">
            <h5 className="hidden lg:block text-sm font-bold tracking-[0.1px] text-[#252B42] uppercase">
              About Company
            </h5>

            <h1 className="text-[40px] lg:text-[58px] font-bold leading-12.5 lg:leading-20 text-[#252B42] tracking-[0.2px]">
              ABOUT US
            </h1>

            <p className="text-[20px] leading-7.5 text-[#737373] max-w-95 mx-auto lg:mx-0 tracking-[0.2px]">
              We know how large objects will act, but things on a small scale
              <span className="lg:hidden"> just do not act that way.</span>
            </p>

            <div className="pt-4">
              <button className="bg-[#23A6F0] hover:bg-[#1a8cd1] text-white px-10 py-4 rounded-[5px] font-bold text-[14px] tracking-[0.2px] transition-all shadow-md active:scale-95">
                Get Quote Now
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative order-2 lg:order-2 flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 lg:w-150 h-87.5 lg:h-150 bg-[#FFE9EA] rounded-full -z-10" />
            <div className="absolute top-0 left-0 w-12 lg:w-20 h-12 lg:h-20 bg-[#FFE9EA] rounded-full -z-10 translate-x-[-20%] translate-y-[20%]" />
            <div className="absolute bottom-10 right-0 w-4 h-4 bg-[#977DF4] rounded-full -z-10" />
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#977DF4] rounded-full -z-10" />

            <img
              src={heroImage}
              alt="About Us Hero"
              className="relative z-10 w-full max-w-87.5 lg:max-w-150 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroArea;
