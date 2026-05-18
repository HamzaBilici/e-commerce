type LayoutHeaderProps = {
  topText: string;
  midText: string;
  bottomText: string;
};

function LayoutHeader({topText,midText,bottomText}:LayoutHeaderProps) {


  return (
    <>
      <div className="max-w-173 w-full flex flex-col gap-2.5">
        <h2 className="font-montserrat leading-7.5 font-normal text-[20px] tracking-[0.2px] text-center text-[#737373]">
          {topText}
        </h2>
        <h3 className="font-montserrat leading-7.5 font-bold text-[24px] tracking-[0.1px] text-center text-[#252B42]">
          {midText}
        </h3>
        <p className="font-montserrat leading-7.5 font-normal text-[14px]  tracking-[0.2px] text-center text-[#737373]">
          {bottomText}
        </p>
      </div>
    </>
  );
}

export default LayoutHeader;
