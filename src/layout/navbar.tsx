import {
Phone,
Mail,
Search,
ShoppingCart,
User,
Heart
} from "lucide-react";

function Navbar() {
  return (
    <>
      <section className="w-full flex flex-col justify-center gap-3 items-center">
        <div className="px-6 justify-center items-center max-w-360 w-full flex bg-[#252B42] font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-white">
            <div className="flex gap-2.5">
                <button className="flex items-center gap-1 m-2.5"><Phone size={16}/> (225) 555-0118</button>
                <button className="flex items-center gap-1 m-2.5"><Mail size={16}/> michelle.rivera@example.com</button>
            </div>
            <h6 className="m-2.5">Follow Us  and get a chance to win 80% off</h6>
          <div className="flex gap-5 m-2.5">
            <span className="">Follow Us  :</span>
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
         <div className="px-9  items-center max-w-360 w-full flex gap-10">
            <div className="py-4.5 font-montserrat font-bold text-[24px] leading-8 tracking-[0.1px] text-[#252B42] w-46.75">
                Bandage
            </div>
            <div className="flex flex-row justify-between grow">
                <div className="flex items-center">
                    <ul className="flex flex-row font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center text-[#737373] gap-4">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Pages</li>
                    </ul>
                </div>
                <div className="text-[#23A6F0]">
                    <ul className="flex flex-row">
                        <li className="flex gap-1.5 m-4"><User /><span className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center">Login / Register</span></li>
                        <li className="flex gap-1.5 m-4"><Search /></li>
                        <li className="flex gap-1.5 m-4"><ShoppingCart /><span>1</span></li>
                        <li className="flex gap-1.5 m-4"><Heart /> <span>1</span></li>
                    </ul>
                </div>
            </div>
         </div>
      </section>
    </>
  );
}

export default Navbar;
