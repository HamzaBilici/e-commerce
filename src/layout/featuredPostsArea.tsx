import FeaturedPostsCard from "../components/featuredPostsCard";

function FeaturedPostsArea() {
  return (
    <>
      <section className="w-full flex justify-center">
        <div className="max-w-281 flex flex-col items-center gap-24 my-20">
          <div className="max-w-173 w-full flex flex-col gap-2.5">
            <h6 className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center text-[#23A6F0]">Practice Advice</h6>
            <h3 className="font-montserrat font-bold text-[40px] leading-12.5 tracking-[0.2px] text-center text-[#252B42]">Featured Posts</h3>
          </div>

          <div className="flex gap-2.5">
            <FeaturedPostsCard/>
            <FeaturedPostsCard/>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedPostsArea;
