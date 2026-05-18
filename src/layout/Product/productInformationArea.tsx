import React from "react";
import { ChevronRight } from "lucide-react";

interface ProductInformationAreaProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    rating: number;
    sell_count: number;
    images?: { url: string; index: number }[];
  };
}

const ProductInformationArea: React.FC<ProductInformationAreaProps> = ({
  product,
}) => {
  if (!product) return null;

  return (
    <section className="bg-white font-montserrat">
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-6 md:gap-12 py-6 text-sm font-bold text-[#737373]">
          <button className="text-[#23A6F0] border-b-2 border-[#23A6F0] pb-6 -mb-6 transition-colors">
            Description
          </button>
          <button className="hover:text-[#23A6F0] transition-colors">
            Additional Information
          </button>
          <button className="hover:text-[#23A6F0] transition-colors flex items-center gap-1">
            Reviews{" "}
            <span className="text-[#23856D]">
              ({product.rating > 4 ? "12" : "4"})
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="relative rounded-lg overflow-hidden shadow-md aspect-4/5 lg:aspect-auto max-h-100">
              <img
                src={
                  product.images?.[0]?.url ||
                  "https://via.placeholder.com/400x500"
                }
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-6 text-left">
            <h3 className="text-xl font-bold text-[#252B42]">{product.name}</h3>
            <div className="space-y-4 text-sm text-[#737373] leading-6">
              <p className="font-medium text-gray-800">
                Product Specifications & Details:
              </p>
              <p>{product.description}</p>
              <p className="text-xs text-gray-400">
                * Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#252B42]">
                Quick Features
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-bold text-[#737373]">
                  <ChevronRight size={16} className="text-[#23A6F0]" />
                  Product Price:{" "}
                  <span className="text-[#23856D]">${product.price}</span>
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-[#737373]">
                  <ChevronRight size={16} className="text-[#23A6F0]" />
                  Total Stock Availability:{" "}
                  <span className="text-[#23A6F0]">{product.stock} units</span>
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-[#737373]">
                  <ChevronRight size={16} className="text-[#23A6F0]" />
                  Performance Rating: {product.rating} / 5.0
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#252B42]">
                Store Guarantees
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-bold text-[#737373]">
                  <ChevronRight size={16} className="text-[#2DC071]" />
                  {product.sell_count}+ Confirmed Orders Delivered
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-[#737373]">
                  <ChevronRight size={16} className="text-[#2DC071]" />
                  100% Original Brand Product
                </li>
                <li className="flex items-center gap-2 text-sm font-bold text-[#737373]">
                  <ChevronRight size={16} className="text-[#2DC071]" />
                  Secure Packaging & Fast Dispatch
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInformationArea;
