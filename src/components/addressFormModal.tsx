import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store/hooks";
import {
  addAddress,
  updateAddress,
} from "../store/actions/shoppingCartActions";

interface IAddressForm {
  id?: number;
  title: string;
  name: string;
  surname: string;
  phone: string;
  city: string;
  district: string;
  neighborhood: string;
}

interface AddressFormModalProps {
  editAddressData?: IAddressForm | null;
  onClose: () => void;
}

const AddressFormModal: React.FC<AddressFormModalProps> = ({
  editAddressData,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
  } = useForm<IAddressForm>({
    defaultValues: editAddressData || {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
    },
  });

  const onSubmit = (data: IAddressForm) => {
    if (editAddressData && editAddressData.id) {
      dispatch(updateAddress({ ...data, id: editAddressData.id }));
    } else {
      dispatch(addAddress(data));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-montserrat">
      <div className="bg-white p-6 rounded-lg w-125 shadow-xl">
        <h3 className="text-lg font-bold mb-4 text-[#252B42]">
          {editAddressData ? "Adres Güncelle" : "Yeni Adres Ekle"}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-[#252B42] mb-1">
              Adres Başlığı
            </label>
            <input
              {...register("title", { required: true })}
              className="w-full border p-2 rounded text-sm"
              placeholder="ev adresi"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#252B42] mb-1">
                Ad
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full border p-2 rounded text-sm"
                placeholder="Alişan"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#252B42] mb-1">
                Soyad
              </label>
              <input
                {...register("surname", { required: true })}
                className="w-full border p-2 rounded text-sm"
                placeholder="Karababa"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#252B42] mb-1">
              Telefon
            </label>
            <input
              type="tel"
              {...register("phone", { required: true })}
              className="w-full border p-2 rounded text-sm"
              placeholder="05376845834"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#252B42] mb-1">
                Şehir (İl)
              </label>
              <input
                {...register("city", { required: true })}
                className="w-full border p-2 rounded text-sm"
                placeholder="istanbul"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#252B42] mb-1">
                İlçe
              </label>
              <input
                {...register("district", { required: true })}
                className="w-full border p-2 rounded text-sm"
                placeholder="esenler"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#252B42] mb-1">
              Adres Detayları (Mahalle, Sokak, No)
            </label>
            <textarea
              {...register("neighborhood", { required: true })}
              rows={3}
              className="w-full border p-2 rounded text-sm resize-none"
              placeholder="adres detayları"
            />
          </div>

          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-sm font-bold text-[#737373]"
            >
              Vazgeç
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded text-sm font-bold hover:bg-orange-600"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressFormModal;
