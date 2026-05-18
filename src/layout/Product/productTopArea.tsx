import React from "react";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import ProductCarousel from "../../components/productCarousel";

import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/actions/shoppingCartActions";

interface ProductTopAreaProps {
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

const ProductTopArea: React.FC<ProductTopAreaProps> = ({ product }) => {
  if (!product) return null;

  const dispatch = useAppDispatch();

  const fullStars = Math.floor(product.rating || 0);
  const hasHalfStar = (product.rating || 0) % 1 >= 0.5;

  return (
    <>
      <section className="bg-white lg:bg-[#FAFAFA] font-montserrat py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            <div className="w-full md:w-1/2 space-y-4">
              <ProductCarousel images={product.images} />
            </div>

            <div className="w-full lg:w-1/2 space-y-5 text-left">
              <h1 className="text-xl font-normal text-[#252B42]">
                {product.name}
              </h1>

              <div className="flex items-center gap-2">
                <div className="flex text-[#F3CD03]">
                  {[...Array(fullStars)].map((_, i) => (
                    <Star
                      key={`full-${i}`}
                      size={20}
                      fill="currentColor"
                      stroke="none"
                    />
                  ))}
                  {hasHalfStar && (
                    <Star
                      size={20}
                      fill="currentColor"
                      className="opacity-70"
                    />
                  )}
                  {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
                    (_, i) => (
                      <Star
                        key={`empty-${i}`}
                        size={20}
                        strokeWidth={2}
                        className="text-gray-300"
                      />
                    ),
                  )}
                </div>
                <span className="text-sm font-bold text-[#737373]">
                  {product.sell_count} Sales
                </span>
              </div>

              <div className="space-y-1 pt-2">
                <h2 className="text-2xl font-bold text-[#252B42]">
                  ${product.price}
                </h2>
                <p className="text-sm font-bold">
                  <span className="text-[#737373]">Availability : </span>
                  {product.stock > 0 ? (
                    <span className="text-[#2DC071]">
                      In Stock ({product.stock})
                    </span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </p>
              </div>

              <p className="text-sm text-[#858585] leading-6 max-w-md">
                {product.description}
              </p>

              <hr className="border-[#BDBDBD] w-full my-6" />

              <div className="flex gap-2.5 pb-6">
                {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border border-black/5 shadow-inner transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  disabled={product.stock === 0}
                  onClick={() => dispatch(addToCart(product))}
                  className={`px-6 lg:px-8 py-3 rounded-md font-bold text-sm transition-all shadow-md active:scale-95 ...`}
                >
                  {product.stock > 0 ? "Add To Cart" : "Out of Stock"}
                </button>

                <div className="flex gap-2">
                  {[Heart, ShoppingCart, Eye].map((Icon, index) => (
                    <button
                      key={index}
                      className="p-2.5 bg-white border border-[#E8E8E8] rounded-full shadow-sm hover:bg-gray-50 transition-colors"
                    >
                      <Icon size={20} className="text-[#252B42]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTopArea;
