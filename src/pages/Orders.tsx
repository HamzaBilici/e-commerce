import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchOrderHistory } from "../store/actions/shoppingCartActions";

const Orders: React.FC = () => {
  const dispatch = useAppDispatch();
  const orderHistory = useAppSelector(
    (state) => state.shoppingCart.orderHistory || [],
  );
  const [expandedOrderId, setExpandedOrderId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchOrderHistory());
  }, [dispatch]);

  const toggleOrderExpand = (orderId: number) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 font-montserrat text-left min-h-[60vh]">
      <h2 className="text-2xl font-bold text-[#252B42] mb-6 border-b border-gray-100 pb-3">
        Geçmiş Siparişlerim ({orderHistory.length})
      </h2>

      {orderHistory.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-md border border-gray-100">
          <p className="text-sm font-semibold text-[#737373]">
            Henüz kayıtlı bir siparişiniz bulunmuyor.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orderHistory.map((order: any) => {
            const isExpanded = expandedOrderId === order.id;
            const formattedDate = new Date(order.order_date).toLocaleDateString(
              "tr-TR",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              },
            );

            return (
              <div
                key={order.id}
                className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm"
              >
                <div
                  onClick={() => toggleOrderExpand(order.id)}
                  className="bg-gray-50/70 p-4 grid grid-cols-4 items-center gap-4 cursor-pointer hover:bg-gray-50 select-none transition-colors"
                >
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">
                      Sipariş Tarihi
                    </span>
                    <span className="text-xs font-semibold text-gray-700">
                      {formattedDate}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">
                      Sipariş No
                    </span>
                    <span className="text-xs font-bold text-[#252B42]">
                      #ORD-{order.id}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">
                      Toplam Tutar
                    </span>
                    <span className="text-sm font-bold text-orange-500">
                      {order.price.toFixed(2)} TL
                    </span>
                  </div>
                  <div className="text-right">
                    <button className="text-xs font-bold text-[#23A6F0] bg-white border border-gray-200 px-3 py-1.5 rounded hover:bg-gray-50 transition-all">
                      {isExpanded ? "Detayları Gizle ↑" : "Detayları Göster ↓"}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-gray-100 p-4 bg-white space-y-4">
                    <div className="grid grid-cols-2 gap-6 bg-gray-50/30 p-3 rounded border border-gray-100 text-xs text-[#737373] font-medium">
                      <p>
                        📍{" "}
                        <span className="font-bold text-[#252B42]">
                          Teslimat Adres ID:
                        </span>{" "}
                        {order.address_id}
                      </p>
                      <p>
                        💳{" "}
                        <span className="font-bold text-[#252B42]">
                          Kullanılan Kart:
                        </span>{" "}
                        **** **** **** {String(order.card_no || "").slice(-4)} (
                        {order.card_name})
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-[#252B42] uppercase tracking-wider mb-2">
                        Satın Alınan Ürünler
                      </h4>

                      {order.products?.map((prod: any, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-4 p-3 border border-gray-50 rounded-md hover:bg-gray-50/50 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs font-bold text-[#252B42] truncate">
                              {prod.detail ||
                                prod.name ||
                                prod.product?.name ||
                                "Ürün Detayı Bulunamadı"}
                            </h5>
                            <p className="text-[11px] text-gray-400 mt-0.5">
                              Ürün ID:{" "}
                              {prod.product_id ||
                                prod.id ||
                                prod.product?.id ||
                                "N/A"}
                            </p>
                          </div>
                          <div className="text-right min-w-20">
                            <span className="block text-[10px] text-gray-400 font-bold">
                              Adet
                            </span>
                            <span className="text-xs font-bold text-[#252B42]">
                              {prod.count || prod.quantity || 1}x
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
