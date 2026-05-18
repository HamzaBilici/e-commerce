import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white py-20 lg:py-40 font-montserrat">
      <div className="max-w-[1050px] mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-[40px] lg:text-[58px] leading-[50px] lg:leading-[80px] font-bold text-[#252B42] tracking-[0.2px] max-w-[600px] mb-8">
          Get answers to all your questions.
        </h2>

        <p className="text-[14px] lg:text-[20px] leading-[20px] lg:leading-[30px] text-[#737373] tracking-[0.2px] max-w-[450px] lg:max-w-[550px] mb-8">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>

        <button className="bg-[#23A6F0] hover:bg-[#1a8cd1] text-white px-10 py-4 rounded-[5px] font-bold text-[14px] tracking-[0.2px] transition-all mb-20 shadow-sm active:scale-95">
          CONTACT OUR COMPANY
        </button>

        <div className="flex items-center gap-8 text-[#737373]">
          <a href="#" className="hover:text-[#23A6F0] transition-colors">
            <FaTwitter size={30} fill="currentColor" stroke="none" />
          </a>
          <a href="#" className="hover:text-[#252B42] transition-colors">
            <FaFacebook size={30} fill="currentColor" stroke="none" />
          </a>
          <a href="#" className="hover:text-[#E1306C] transition-colors">
            <FaInstagram size={30} strokeWidth={2.5} />
          </a>
          <a href="#" className="hover:text-[#0077b5] transition-colors">
            <FaLinkedin size={30} fill="currentColor" stroke="none" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
