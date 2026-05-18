import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  fetchAddresses,
  deleteAddress,
  addAddress,
  updateAddress,
  fetchCards,
  addCard,
  updateCard,
  deleteCard,
  createOrder,
} from "../store/actions/shoppingCartActions";

interface IAddress {
  id?: number;
  title: string;
  name: string;
  surname: string;
  phone: string;
  city: string;
  district: string;
  neighborhood: string;
  address: string;
}

interface ICard {
  id?: string | number;
  card_no: string;
  expire_month: number;
  expire_year: number;
  name_on_card: string;
}

const CreateOrder: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const addresses = useAppSelector(
    (state) => state.shoppingCart.addressList || [],
  );
  const cards = useAppSelector((state) => state.shoppingCart.cardList || []);
  const cartItems = useAppSelector((state) => state.shoppingCart.cart || []);

  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  const [selectedShipping, setSelectedShipping] = useState<number | null>(null);
  const [selectedBilling, setSelectedBilling] = useState<number | null>(null);
  const [sameAddress, setSameAddress] = useState<boolean>(true);
  const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
  const [editAddressId, setEditAddressId] = useState<number | null>(null);

  const [selectedCardId, setSelectedCardId] = useState<string | number | null>(
    null,
  );
  const [showCardForm, setShowCardForm] = useState<boolean>(false);
  const [editCardId, setEditCardId] = useState<string | number | null>(null);

  const addressForm = useForm<IAddress>();
  const cardForm = useForm<ICard>();

  const totalPrice = cartItems
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (addresses.length > 0 && selectedShipping === null) {
      setSelectedShipping(addresses[0].id || null);
      setSelectedBilling(addresses[0].id || null);
    }
  }, [addresses, selectedShipping]);

  useEffect(() => {
    if (cards.length > 0 && selectedCardId === null) {
      setSelectedCardId(cards[0].id || null);
    }
  }, [cards, selectedCardId]);

  const handleSelectShipping = (id: number) => {
    setSelectedShipping(id);
    if (sameAddress) setSelectedBilling(id);
  };

  const openNewAddressForm = () => {
    setEditAddressId(null);
    addressForm.reset({
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    });
    setShowAddressForm(true);
  };

  const openEditAddressForm = (addr: IAddress) => {
    setEditAddressId(addr.id || null);
    addressForm.reset(addr);
    setShowAddressForm(true);
  };

  const onAddressSubmit = (data: IAddress) => {
    const payload = { ...data, address: data.address || data.neighborhood };
    if (editAddressId) {
      dispatch(updateAddress({ ...payload, id: editAddressId }));
    } else {
      dispatch(addAddress(payload));
    }
    setShowAddressForm(false);
  };

  const openNewCardForm = () => {
    setEditCardId(null);
    cardForm.reset({
      card_no: "",
      expire_month: 1,
      expire_year: 2026,
      name_on_card: "",
    });
    setShowCardForm(true);
  };

  const openEditCardForm = (card: ICard) => {
    setEditCardId(card.id || null);
    cardForm.reset({
      card_no: card.card_no,
      expire_month: Number(card.expire_month),
      expire_year: Number(card.expire_year),
      name_on_card: card.name_on_card,
    });
    setShowCardForm(true);
  };

  const onCardSubmit = (data: ICard) => {
    const payload = {
      card_no: data.card_no,
      expire_month: Number(data.expire_month),
      expire_year: Number(data.expire_year),
      name_on_card: data.name_on_card,
    };
    if (editCardId) {
      dispatch(updateCard({ ...payload, id: editCardId }));
    } else {
      dispatch(addCard(payload));
    }
    setShowCardForm(false);
  };

  const handleOrderSubmit = () => {
    debugger;
    if (!selectedShipping || !selectedCardId) return;

    const activeCard = cards.find(
      (c: any) => String(c.id) === String(selectedCardId),
    );

    if (!activeCard) {
      console.error("Seçili kart nesnesi listesinde bulunamadı!");
      return;
    }

    const now = new Date();
    const orderDate = now.toISOString().split(".")[0];

    const rawCardNo = String(activeCard.card_no || "").replace(/\s/g, "");

    const orderPayload = {
      address_id: Number(selectedShipping),
      order_date: orderDate,
      card_no: rawCardNo ? rawCardNo : 0,
      card_name: activeCard.name_on_card || "",
      card_expire_month: Number(activeCard.expire_month),
      card_expire_year: Number(activeCard.expire_year),
      card_ccv: 321,
      price: Number(totalPrice.toFixed(2)),
      products: cartItems
        .filter((item) => item.checked)
        .map((item) => ({
          product_id: Number(item.product.id),
          count: Number(item.count),
          detail:
            `${item.product.name || ""} - ${item.product.description || ""}`.substring(
              0,
              40,
            ),
        })),
    };

    console.log(
      "POST /order adresine gidecek nihai veri yapısı:",
      orderPayload,
    );
    dispatch(createOrder(orderPayload, history));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 font-montserrat grid grid-cols-3 gap-8 text-left">
      <div className="col-span-2 space-y-6">
        {activeStep === 1 && (
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-md p-6 bg-white flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#252B42]">
                Teslimat Adresi
              </h2>
              <label className="flex items-center gap-2 text-sm font-medium text-[#737373] cursor-pointer">
                <input
                  type="checkbox"
                  checked={sameAddress}
                  onChange={(e) => {
                    setSameAddress(e.target.checked);
                    if (e.target.checked && selectedShipping)
                      setSelectedBilling(selectedShipping);
                  }}
                  className="rounded text-[#23A6F0]"
                />
                Faturamı Aynı Adrese Gönder
              </label>
            </div>

            <button
              onClick={openNewAddressForm}
              className="bg-[#23A6F0] text-white px-4 py-2 rounded font-bold text-sm hover:bg-[#1a8bc7] transition-colors"
            >
              + Yeni Adres Ekle
            </button>

            {showAddressForm && (
              <form
                onSubmit={addressForm.handleSubmit(onAddressSubmit)}
                className="border border-dashed border-gray-300 p-6 rounded-md bg-gray-50 space-y-4"
              >
                <h3 className="font-bold text-sm text-[#252B42]">
                  {editAddressId
                    ? "Adresi Güncelle (PUT)"
                    : "Yeni Adres Ekle (POST)"}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <input
                    {...addressForm.register("title", { required: true })}
                    className="w-full border p-2 rounded text-sm bg-white"
                    placeholder="Adres Başlığı"
                  />
                  <input
                    {...addressForm.register("name", { required: true })}
                    className="w-full border p-2 rounded text-sm bg-white"
                    placeholder="Ad"
                  />
                  <input
                    {...addressForm.register("surname", { required: true })}
                    className="w-full border p-2 rounded text-sm bg-white"
                    placeholder="Soyad"
                  />
                  <input
                    {...addressForm.register("phone", { required: true })}
                    className="w-full border p-2 rounded text-sm bg-white"
                    placeholder="Telefon"
                  />
                  <select
                    {...addressForm.register("city", { required: true })}
                    className="w-full border p-2 rounded text-sm bg-white"
                  >
                    <option value="">Şehir Seçiniz</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="izmir">İzmir</option>
                  </select>
                  <input
                    {...addressForm.register("district", { required: true })}
                    className="w-full border p-2 rounded text-sm bg-white"
                    placeholder="İlçe"
                  />
                  <input
                    {...addressForm.register("neighborhood", {
                      required: true,
                    })}
                    className="w-full border p-2 rounded text-sm bg-white"
                    placeholder="Mahalle"
                  />
                  <textarea
                    {...addressForm.register("address", { required: true })}
                    rows={3}
                    className="w-full border p-2 rounded text-sm bg-white resize-none"
                    placeholder="Açık Adres Detayı"
                  />
                  <div className="flex gap-2 justify-end">
                    <button
                      type="submit"
                      className="bg-emerald-500 text-white px-4 py-2 rounded text-xs font-bold"
                    >
                      Kaydet
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddressForm(false)}
                      className="border border-gray-300 px-4 py-2 rounded text-xs font-bold text-gray-500"
                    >
                      İptal
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="grid grid-cols-2 gap-4">
              {addresses.map((addr: IAddress) => (
                <div
                  key={addr.id}
                  onClick={() => handleSelectShipping(addr.id!)}
                  className={`border rounded-md p-4 cursor-pointer flex flex-col justify-between transition-all min-h-40 ${selectedShipping === addr.id ? "border-orange-500 ring-1 ring-orange-500 bg-orange-50/5" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-[#252B42] capitalize">
                        {addr.title}
                      </span>
                      <div
                        className="flex gap-2 text-xs font-bold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => openEditAddressForm(addr)}
                          className="text-[#23A6F0] hover:underline"
                        >
                          Düzenle
                        </button>
                        <button
                          onClick={() => dispatch(deleteAddress(addr.id!))}
                          className="text-red-500 hover:underline"
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-gray-700">
                      {addr.name} {addr.surname}
                    </p>
                    <p className="text-xs text-[#737373] mt-1 wrap-break-words">
                      {addr.address}
                    </p>
                    <p className="text-xs text-[#737373] mt-0.5">
                      {addr.neighborhood} - {addr.district} / {addr.city}
                    </p>
                  </div>
                  <p className="text-xs text-[#737373] mt-2 font-medium border-t border-gray-100 pt-1">
                    📞 {addr.phone}
                  </p>
                </div>
              ))}
            </div>

            {!sameAddress && (
              <div className="border border-gray-200 rounded-md p-6 bg-white space-y-4">
                <h2 className="text-xl font-bold text-[#252B42]">
                  Fatura Adresi
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {addresses.map((addr: IAddress) => (
                    <div
                      key={addr.id}
                      onClick={() => setSelectedBilling(addr.id!)}
                      className={`border rounded-md p-4 cursor-pointer transition-all min-h-35 ${selectedBilling === addr.id ? "border-orange-500 ring-1 ring-orange-500 bg-orange-50/5" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      <h4 className="font-bold text-sm text-[#252B42] capitalize mb-1">
                        {addr.title}
                      </h4>
                      <p className="text-xs font-semibold text-gray-700">
                        {addr.name} {addr.surname}
                      </p>
                      <p className="text-xs text-[#737373] mt-1">
                        {addr.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeStep === 2 && (
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-md p-6 bg-white flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#252B42]">
                Kart Bilgileri
              </h2>
              <button
                onClick={() => setActiveStep(1)}
                className="text-sm font-bold text-[#23A6F0] hover:underline"
              >
                ← Adres Değiştir
              </button>
            </div>

            <button
              onClick={openNewCardForm}
              className="bg-[#23A6F0] text-white px-4 py-2 rounded font-bold text-sm hover:bg-[#1a8bc7] transition-colors"
            >
              + Yeni Kart Ekle
            </button>

            {showCardForm && (
              <form
                onSubmit={cardForm.handleSubmit(onCardSubmit)}
                className="border border-dashed border-gray-300 p-6 rounded-md bg-gray-50 space-y-4 max-w-md"
              >
                <h3 className="font-bold text-sm text-[#252B42]">
                  {editCardId
                    ? "Kartı Güncelle (PUT)"
                    : "Yeni Kart Ekle (POST)"}
                </h3>
                <div className="space-y-3">
                  <input
                    {...cardForm.register("name_on_card", { required: true })}
                    className="w-full border p-2 rounded text-sm bg-white"
                    placeholder="Kart Üzerindeki İsim"
                  />
                  <input
                    {...cardForm.register("card_no", {
                      required: true,
                      maxLength: 16,
                    })}
                    className="w-full border p-2 rounded text-sm bg-white"
                    placeholder="Kart Numarası"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      {...cardForm.register("expire_month", { required: true })}
                      className="w-full border p-2 rounded text-sm bg-white"
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                    <select
                      {...cardForm.register("expire_year", { required: true })}
                      className="w-full border p-2 rounded text-sm bg-white"
                    >
                      {Array.from({ length: 10 }, (_, i) => 2026 + i).map(
                        (y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button
                      type="submit"
                      className="bg-emerald-500 text-white px-4 py-2 rounded text-xs font-bold"
                    >
                      Kartı Kaydet
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCardForm(false)}
                      className="border border-gray-300 px-4 py-2 rounded text-xs font-bold text-gray-500"
                    >
                      İptal
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="grid grid-cols-2 gap-4">
              {cards.map((card: ICard) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedCardId(card.id!)}
                  className={`border rounded-md p-4 cursor-pointer flex flex-col justify-between transition-all min-h-32.5 ${String(selectedCardId) === String(card.id) ? "border-orange-500 ring-1 ring-orange-500 bg-orange-50/5" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-1.5">
                        <input
                          type="radio"
                          checked={String(selectedCardId) === String(card.id)}
                          onChange={() => setSelectedCardId(card.id!)}
                          className="text-orange-500 focus:ring-orange-500 h-3.5 w-3.5"
                        />
                        <span className="text-xs font-bold text-gray-700 capitalize">
                          {card.name_on_card}
                        </span>
                      </div>
                      <div
                        className="flex gap-2 text-xs font-bold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => openEditCardForm(card)}
                          className="text-[#23A6F0] hover:underline"
                        >
                          Düzenle
                        </button>
                        <button
                          onClick={() => dispatch(deleteCard(card.id!))}
                          className="text-red-500 hover:underline"
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-[#252B42] tracking-wider mt-2">
                      **** **** **** {card.card_no?.slice(-4)}
                    </p>
                  </div>
                  <p className="text-xs text-[#737373] mt-2 border-t border-gray-100 pt-1">
                    S.K.T: {card.expire_month} / {card.expire_year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="border border-gray-200 rounded-md p-6 bg-white space-y-4 sticky top-6">
          <h3 className="text-lg font-bold text-[#252B42] mb-4">
            Sipariş Özeti
          </h3>
          <div className="flex justify-between text-sm font-bold border-b border-gray-100 pb-2 mb-2">
            <span className="text-gray-500">Toplam:</span>
            <span className="text-orange-500">{totalPrice.toFixed(2)} TL</span>
          </div>

          {activeStep === 1 ? (
            <button
              onClick={() => setActiveStep(2)}
              disabled={!selectedShipping || (!sameAddress && !selectedBilling)}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3 rounded text-sm transition-colors cursor-pointer text-center"
            >
              Kaydet ve Devam Et
            </button>
          ) : (
            <button
              onClick={handleOrderSubmit}
              disabled={!selectedCardId || cartItems.length === 0}
              className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3 rounded text-sm transition-colors cursor-pointer text-center"
            >
              Ödeme Yap ve Siparişi Tamamla
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
