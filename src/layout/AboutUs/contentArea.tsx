const ContentArea = () => {
  return (
    <section className="bg-white py-12 lg:py-24 font-montserrat">
      <div className="max-w-254.5 mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[#E74040] text-[14px] font-bold mb-6 lg:mb-10 tracking-[0.2px]">
              Problems trying
            </span>
            <h2 className="text-[24px] lg:text-[24px] font-bold text-[#252B42] leading-[32px] max-w-[350px] lg:max-w-[400px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
          </div>

          <div className="w-full lg:w-1/2 flex items-center lg:pt-16">
            <p className="text-[14px] leading-[20px] text-[#737373] text-center lg:text-left max-w-[350px] lg:max-w-none mx-auto lg:mx-0">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentArea;
