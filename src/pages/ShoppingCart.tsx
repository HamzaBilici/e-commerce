import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  updateCartItemCount,
  toggleCartItemCheck,
  removeFromCart,
} from "../store/actions/shoppingCartActions";
import { Plus, Minus, Trash2, Plus as PlusIcon } from "lucide-react";

import { useHistory } from "react-router-dom";
import type { History } from "history";

function ShoppingCart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.shoppingCart.cart);
  const history = useHistory() as History;

  const checkedProductsPrice = cartItems
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  const baseShippingPrice = checkedProductsPrice > 0 ? 29.99 : 0;
  const shippingDiscount = checkedProductsPrice >= 150 ? baseShippingPrice : 0;

  const grandTotal =
    checkedProductsPrice + baseShippingPrice - shippingDiscount;

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 font-montserrat text-[#737373]">
        <h2 className="text-2xl font-bold mb-2">Sepetiniz Boş</h2>
        <p>
          Sepetinizde ürün bulunmamaktadır. Alışverişe devam etmek için ürünleri
          inceleyebilirsiniz.
        </p>
      </div>
    );
  }
  const user = useAppSelector((state) => state.client.user);
  const token = localStorage.getItem("token");

  const handleCheckout = () => {
    if (!token && (!user || !user.token)) {
      history.push({
        pathname: "/login",
        state: { from: "/create-order" },
      });
    } else {
      history.push("/create-order");
    }
  };

  return (
    <main className="w-full bg-[#FAFAFA] font-montserrat py-8 px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col gap-4 text-left">
        <h1 className="text-xl font-bold text-[#252B42] mb-2">
          Sepetim ({cartItems.length} Ürün)
        </h1>

        <div className="bg-[#F4F9F9] border border-gray-100 rounded p-4 flex items-center gap-3 text-sm font-semibold text-gray-700 w-full lg:w-[calc(100%-22rem)]">
          <span className="text-[#2DC071]">✓</span> Sepetindeki Ürünleri
          Bireysel Veya Kurumsal Fatura Seçerek Alabilirsin.
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start w-full relative">
          <div className="flex-1 w-full space-y-4 lg:max-w-[calc(100%-22rem)]">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-md border border-gray-100 p-6 flex flex-row items-center gap-6 max-sm:flex-col"
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() =>
                    dispatch(toggleCartItemCheck(item.product.id))
                  }
                  className="w-5 h-5 rounded border-gray-300 text-[#23A6F0] focus:ring-[#23A6F0] cursor-pointer"
                />

                <img
                  src={
                    item.product.images?.[0]?.url ||
                    "https://via.placeholder.com/100"
                  }
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded shadow-sm shrink-0"
                />

                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-bold text-[#252B42] line-clamp-2 leading-5">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-[#737373] line-clamp-1">
                    {item.product.description}
                  </p>
                </div>

                <div className="flex items-center border border-gray-200 rounded bg-white">
                  <button
                    onClick={() =>
                      dispatch(updateCartItemCount(item.product.id, -1))
                    }
                    disabled={item.count <= 1}
                    className="p-2 hover:bg-gray-50 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 font-bold text-sm text-[#252B42] min-w-8 text-center">
                    {item.count}
                  </span>
                  <button
                    onClick={() =>
                      dispatch(updateCartItemCount(item.product.id, 1))
                    }
                    className="p-2 hover:bg-gray-50 text-gray-600 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="w-32 text-right font-bold text-lg text-[#252B42] shrink-0 max-sm:text-center">
                  {(item.product.price * item.count).toLocaleString("tr-TR", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  TL
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.product.id))}
                  className="text-gray-400 hover:text-red-500 transition-colors p-2 shrink-0"
                  title="Ürünü Sil"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-4 space-y-4 font-montserrat">
            <button className="w-full bg-[#23A6F0] hover:bg-[#1389ce] text-white py-3.5 px-4 rounded font-bold text-base shadow-sm transition-colors text-center flex justify-center items-center gap-1 active:scale-99">
              Sepeti Onayla <span>&gt;</span>
            </button>

            <div className="w-full bg-white rounded border border-gray-100 p-5 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-[#252B42] border-b border-gray-50 pb-2">
                Sipariş Özeti
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[#737373] font-medium">
                  <span>Ürünün Toplamı</span>
                  <span className="font-bold text-[#252B42]">
                    {checkedProductsPrice.toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                    })}{" "}
                    TL
                  </span>
                </div>

                <div className="flex justify-between text-[#737373] font-medium">
                  <span>Kargo Toplamı</span>
                  <span className="font-bold text-[#252B42]">
                    {baseShippingPrice.toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                    })}{" "}
                    TL
                  </span>
                </div>

                {shippingDiscount > 0 && (
                  <div className="flex justify-between text-[#23A6F0] font-semibold text-xs leading-5">
                    <span className="max-w-45">
                      150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)
                    </span>
                    <span className="font-bold">
                      -
                      {shippingDiscount.toLocaleString("tr-TR", {
                        minimumFractionDigits: 2,
                      })}{" "}
                      TL
                    </span>
                  </div>
                )}

                <hr className="border-gray-100 my-2" />

                <div className="flex justify-between items-center pt-1">
                  <span className="text-base font-bold text-[#252B42]">
                    Toplam
                  </span>
                  <span className="text-xl font-bold text-[#23A6F0]">
                    {grandTotal.toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                    })}{" "}
                    TL
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 py-3 px-4 rounded font-bold text-sm text-[#737373] transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-99">
              <PlusIcon size={16} className="text-[#23A6F0]" /> İNDİRİM KODU GİR
            </button>

            <button
              onClick={handleCheckout}
              className="bg-[#23A6F0] text-white px-6 py-3 rounded font-bold hover:bg-[#1b8ecf] transition-colors"
            >
              Siparişi Tamamla
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShoppingCart;
