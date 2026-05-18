import { useState, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "../store/hooks";
import { useHistory } from "react-router-dom";

function CartDropdown() {
  const cartItems = useAppSelector((state) => state.shoppingCart.cart);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const history = useHistory();

  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.count,
    0,
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.count,
    0,
  );

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => history.push("/cart")}
        className="flex items-center gap-1 text-[#23A6F0] font-bold font-montserrat text-sm py-2 focus:outline-none cursor-pointer"
      >
        <ShoppingCart size={20} />
        {totalItemCount > 0 && (
          <span className="bg-[#23A6F0] text-white text-[11px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {totalItemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full w-84 bg-white rounded-md shadow-xl border border-gray-100 p-4 z-50 font-montserrat mt-1">
          <h4 className="text-sm font-bold text-[#252B42] mb-3 text-left">
            Sepetim ({totalItemCount} Ürün)
          </h4>

          {cartItems.length === 0 ? (
            <p className="text-xs text-[#737373] py-6 text-center font-medium">
              Sepetiniz henüz boş.
            </p>
          ) : (
            <>
              <div className="max-h-64 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 border-b border-gray-50 pb-3 items-center"
                  >
                    <img
                      src={item.product.images?.[0]?.url}
                      alt=""
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 text-left min-w-0">
                      <h5 className="text-xs font-bold text-[#252B42] line-clamp-2">
                        {item.product.name}
                      </h5>
                      <p className="text-[11px] text-[#737373] mt-1">
                        Adet: {item.count}
                      </p>
                      <p className="text-xs font-bold text-[#23A6F0] mt-0.5">
                        {item.product.price} TL
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-100 mt-3">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-[#737373]">
                    Toplam:
                  </span>
                  <span className="text-sm font-bold text-[#23856D]">
                    {totalPrice.toFixed(2)} TL
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      history.push("/cart");
                    }}
                    className="flex-1 py-2.5 border border-[#E8E8E8] rounded text-xs font-bold text-[#252B42] hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Sepete Git
                  </button>
                  <button className="flex-1 py-2.5 bg-[#23A6F0] text-white rounded text-xs font-bold hover:bg-[#2d9ada] transition-colors shadow-sm">
                    Siparişi Tamamla
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CartDropdown;
