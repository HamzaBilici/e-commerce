import FeaturedPostsCardImg from "../assets/featured1.jpg";
import {
  Download,
  AlarmClock,
  ChartArea,
  Waves,
  ArrowRight,
  Heart,
  ShoppingCart,
  Eye,
  Star
} from "lucide-react";

function FeaturedPostsCard() {
  return (
    <>
      <div className="w-124.5 flex flex-row">
        <div className="min-w-52.25 h-full relative flex flex-col justify-between">
          <img
            className="h-full w-auto object-cover absolute -z-1 "
            src={FeaturedPostsCardImg}
            alt=""
          />
          <span className="m-6   rounded-[3px] bg-[#E74040] text-white w-13 h-6 text-center">
            Sale
          </span>
          <div className="my-6 flex gap-2.5 justify-center">
            <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <Heart size={15} color="#252B42" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <ShoppingCart size={15} color="#252B42" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <Eye size={15} color="#252B42" />
            </button>
          </div>
        </div>
        <div className="m-6.25 flex flex-col gap-2.5">
          <div className="flex flex-row justify-between">
            <h6 className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#23A6F0]">
              English Department
            </h6>{" "}
            <span className="flex flex-row rounded-[20px] bg-[#252B42]  font-montserrat font-normal text-[12px] leading-4 tracking-[0.2px] justify-center items-center gap-1 p-1.25 text-white">
              <Star size={15} fill="#FFCE31" color="#FFCE31" />
              4.9
            </span>
          </div>
          <h5 className="font-[Montserrat] font-bold text-[16px] leading-6 tracking-[0.1px] text-[#252B42]">
            Graphic Design
          </h5>
          <p className="font-montserrat font-normal text-[14px] leading-5 tracking-[0.2px] text-[#737373]">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="flex items-center">
            <Download size={16} color="#737373" />
            <h6 className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373]">
              15 Sales
            </h6>
          </div>
          <div className="flex gap-1.25">
            <span className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-[#BDBDBD]">
              $16.48
            </span>
            <span className="font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-center text-[#23856D]">
              $6.48
            </span>
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-full w-4 h-4 bg-[#23A6F0]"></span>
            <span className="rounded-full w-4 h-4 bg-[#23A6F0]"></span>
            <span className="rounded-full w-4 h-4 bg-[#23A6F0]"></span>
            <span className="rounded-full w-4 h-4 bg-[#23A6F0]"></span>
          </div>
          <div className="flex gap-3 my-4">
            <span className="font-montserrat font-normal text-[12px] leading-4 tracking-[0.2px] text-[#737373] flex items-center gap-1.25">
              <AlarmClock size={13} color="#23A6F0" />
              22h...
            </span>

            <span className="font-montserrat font-normal text-[12px] leading-4 tracking-[0.2px] text-[#737373] flex items-center gap-1.25">
              <Waves size={13} color="#E77C40" />
              64 Lessons
            </span>

            <span className="font-montserrat font-normal text-[12px] leading-4 tracking-[0.2px] text-[#737373] flex items-center gap-1.25">
              <ChartArea size={13} color="#23856D" />
              Progress
            </span>
          </div>
          <button className="font-montserrat font-bold text-[12px] leading-6 tracking-[0.2px] text-[#23A6F0] flex items-center gap-2.5 py-2.5 px-5 border border-[#23A6F0] max-w-35.25 rounded-[37px]">
            Learn More
            <ArrowRight size={16} color="#23A6F0" />
          </button>
        </div>
      </div>
    </>
  );
}
export default FeaturedPostsCard;
