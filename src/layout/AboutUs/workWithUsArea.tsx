const WorkWithUsArea = () => {
  return (
    <section className="  font-montserrat overflow-hidden flex justify-center">
      <div className="flex flex-col lg:flex-row items-center max-w-360 bg-[#2D7CC1]">
        <div className="w-full lg:w-[60%] px-10 py-20 lg:py-0 lg:px-40 flex flex-col items-center lg:items-start text-center lg:text-left justify-center min-h-125 lg:min-h-160">
          <h5 className="text-white text-base font-bold tracking-[0.1px] mb-6 lg:mb-8 uppercase">
            Work With Us
          </h5>

          <h2 className="text-white text-[40px] lg:text-[58px] font-bold leading-12.5 lg:leading-20 tracking-[0.2px] mb-6 lg:mb-8 max-w-125">
            Now Let's grow Yours
          </h2>

          <p className="text-white text-sm lg:text-base leading-6 tracking-[0.2px] max-w-110 mb-8 opacity-90">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>

          <button className="border border-white text-white px-10 py-4 rounded-[5px] font-bold text-sm tracking-[0.2px] hover:bg-white hover:text-[#2D7CC1] transition-all duration-300 active:scale-95">
            Button
          </button>
        </div>

        <div className="hidden lg:block lg:w-[40%] self-stretch">
          <img
            src="https://placehold.co/600x800/e0e0e0/white?text=Model+Image"
            alt="Work with us model"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsArea;
