import introImage1 from "../assets/intro1.jpg";
import introImage2 from "../assets/intro2.jpg";

function IntroArea() {
  return (
    <>
      <section className="w-full flex justify-center py-20 min-h-164.5">
        <div className="max-w-281 flex items-center   max-h-124.5 h-full w-full justify-between ">
          <div className="flex flex-row  w-full h-124.5 max-w-lg gap-4 min-w-93.5">
            <div className="max-w-54.25 w-full h-full relative">
              <img
                className="h-full w-auto absolute object-cover"
                src={introImage1}
                alt=""
              />
            </div>
            <div className="max-w-70 w-full relative">
              <img
                className="h-full w-auto absolute object-cover"
                src={introImage2}
                alt=""
              />
            </div>
          </div>
          <div className="max-w-111.75 flex flex-col gap-4 min-w-70">
            <h5 className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#23A6F0]">
              Featured Products
            </h5>
            <h2 className="font-montserrat font-bold text-[40px] leading-12.5 tracking-[0.2px] text-[#252B42]">
              We love what we do
            </h2>
            <p className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics. Problems trying
              to resolve the conflict between the two major realms of Classical
              physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default IntroArea;
