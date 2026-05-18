import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

interface ICategory {
  id: number;
  title: string;
  code: string;
  rating: number;
}

const ShopDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories: ICategory[] = useAppSelector(
    (state) =>
      (state as any).global?.categories || state.product?.categories || [],
  );

  const womenCategories =
    categories?.length > 0
      ? categories
          .filter((cat) => cat.code?.startsWith("k:"))
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5)
      : [];

  const menCategories =
    categories?.length > 0
      ? categories
          .filter((cat) => cat.code?.startsWith("e:"))
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5)
      : [];

  const slugify = (text: string) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "cc");
  };

  return (
    <li
      className="relative flex items-center h-full max-lg:flex-col max-lg:w-full"
      onMouseEnter={() => setIsOpen(true)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 font-montserrat font-bold text-[14px] leading-6 text-[#737373] hover:text-[#23A6F0] transition-colors focus:outline-none max-lg:text-[30px] max-lg:font-normal max-lg:py-4"
      >
        Shop
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} max-lg:w-6 max-lg:h-6`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && categories && categories.length > 0 && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-full left-0 mt-2 w-[480px] bg-white border border-gray-100 shadow-xl rounded-md z-[999] p-6 grid grid-cols-2 gap-8 
                   max-lg:static max-lg:w-full max-lg:grid-cols-1 max-lg:gap-6 max-lg:border-none max-lg:shadow-none max-lg:p-4"
        >
          <div>
            <h4 className="font-montserrat font-bold text-[16px] text-[#252B42] mb-3 pb-1 border-b border-gray-100 max-lg:text-[24px]">
              Kadın
            </h4>
            <ul className="space-y-2.5 max-lg:space-y-4">
              {womenCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop/kadin/${slugify(cat.title)}/${cat.id}`}
                    className="block font-montserrat font-medium text-[14px] text-[#737373] hover:text-[#23A6F0] hover:pl-1 transition-all max-lg:text-[22px] max-lg:font-normal"
                    onClick={() => setIsOpen(false)}
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-[16px] text-[#252B42] mb-3 pb-1 border-b border-gray-100 max-lg:text-[24px]">
              Erkek
            </h4>
            <ul className="space-y-2.5 max-lg:space-y-4">
              {menCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop/erkek/${slugify(cat.title)}/${cat.id}`}
                    className="block font-montserrat font-medium text-[14px] text-[#737373] hover:text-[#23A6F0] hover:pl-1 transition-all max-lg:text-[22px] max-lg:font-normal"
                    onClick={() => setIsOpen(false)}
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default ShopDropdown;
