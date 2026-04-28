function Footer() {
  return (
    <>
      <section className="w-full flex flex-col justify-center">
        <div className=" bg-[#FAFAFA] w-full flex flex-row justify-center">
          <div className="max-w-281 flex flex-row w-full justify-between items-center my-10">
            <div className="w-59  font-montserrat font-bold text-[24px] leading-8 tracking-[0.1px] my-3.5">
              Bandage
            </div>
            <div className="flex gap-5">
              <span>
                {" "}
                <img
                  className="w-6 h-6"
                  src="https://toppng.com/uploads/preview/facebook-fb-logo-icon-round-outline-11689105241ortgye43t6.webp"
                  alt=""
                />
              </span>
              <span>
                {" "}
                <img
                  className="w-6 h-6"
                  src="https://toppng.com/uploads/preview/facebook-fb-logo-icon-round-outline-11689105241ortgye43t6.webp"
                  alt=""
                />
              </span>
              <span>
                {" "}
                <img
                  className="w-6 h-6"
                  src="https://toppng.com/uploads/preview/facebook-fb-logo-icon-round-outline-11689105241ortgye43t6.webp"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <div className="  w-full flex flex-row justify-center">
          <div className="max-w-281 flex flex-row w-full  items-start my-12.5 gap-7.5">
            <div className="w-37 flex flex-col gap-2.5">
              <h5 className="mb-2.5 font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#252B42]">
                Company Info
              </h5>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                About Us
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                Carrier
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                We are hiring
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                Blog
              </span>
            </div>
            <div className="w-38 flex flex-col gap-2.5">
              {" "}
              <h5 className="mb-2.5 font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#252B42]">
                Legal
              </h5>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                About Us
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                Carrier
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                We are hiring
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                Blog
              </span>
            </div>
            <div className="w-37 flex flex-col gap-2.5">
              <h5 className="mb-2.5 font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#252B42]">
                Features
              </h5>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                Business Marketing
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                User Analytic
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                Live Chat
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                Unlimited Support
              </span>
            </div>
            <div className="w-38 flex flex-col gap-2.5">
              <h5 className="mb-2.5 font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#252B42]">
                Resources
              </h5>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                IOS & Android
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                Watch a Demo
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                Customers
              </span>
              <span className="font-montserrat font-bold text-[13px] leading-6 tracking-[0.2px] text-[#737373]">
                API
              </span>
            </div>
            <div className="w-80.25 flex flex-col">
              <h5 className="mb-2.5 font-montserrat font-bold text-[16px] leading-6 tracking-[0.1px] text-[#252B42]">
                Get In Touch
              </h5>
              <div className="bg-[#F9F9F9] flex flex-row max-h-14.5 rounded-md">
                    <input className="  pl-5 h-14.5 font-montserrat font-normal text-[14px] leading-7 tracking-[0.2px] text-[#737373]" name="" id="" placeholder="Your Email"></input>
                    <button className="font-montserrat font-normal text-[14px] leading-7 tracking-[0.2px] text-center bg-[#23A6F0] text-white py-4 px-7">Subscribe</button>
              </div>
              <span className="font-montserrat font-normal text-[12px] leading-7 tracking-[0.2px] text-[#737373]">Lore imp sum dolor Amit</span>
            </div>
          </div>
        </div>
        <div className=" bg-[#FAFAFA] w-full flex flex-row justify-center">
          <div className="max-w-281 flex flex-row w-full items-center my-5.5 font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-[#737373]">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
