import React, { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { type AxiosResponse } from "axios";
import { toast } from "react-toastify";

// @ts-ignore
import { axiosInstance } from "../api/axiosInstance";

interface IRole {
  id: number;
  name: string;
  code: string;
}

interface ISignupForm {
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  role_id: string;
  storeName?: string;
  storePhone?: string;
  storeTaxId?: string;
  storeBankAccount?: string;
}

interface ISignupPayload {
  name: string;
  email: string;
  password?: string;
  role_id: string;
  store?: {
    name: string;
    phone: string;
    tax_no: string;
    bank_account: string;
  };
}

const Register: React.FC = () => {
  const [roles, setRoles] = useState<IRole[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ISignupForm>({
    mode: "onChange",
    defaultValues: { role_id: "3" },
  });

  const selectedRoleId = watch("role_id");

  useEffect(() => {
    axiosInstance.get<IRole[]>("/roles")
      .then((res: AxiosResponse<IRole[]>) => setRoles(res.data))
      .catch((err: any) => console.error("Roles fetch error:", err));
  }, []);

  const onSubmit: SubmitHandler<ISignupForm> = (data) => {
    setLoading(true);

    const payload: ISignupPayload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (data.role_id === "2") {
      payload.store = {
        name: data.storeName || "",
        phone: data.storePhone || "",
        tax_no: data.storeTaxId || "",
        bank_account: data.storeBankAccount || "",
      };
    }

    axiosInstance.post("/signup", payload)
      .then(() => {
        toast.success(
          "You need to click link in email to activate your account!",
        );
        setTimeout(() => history.goBack(), 3000);
      })
      .catch((err: any) => {
        const errorMsg = err.response?.data?.message || "Signup failed!";
        toast.error(errorMsg);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-8 bg-white shadow-xl rounded-lg font-montserrat">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#252B42]">
        Sign Up
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">
            Name
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Min 3 chars" },
            })}
            className={`w-full border p-3 rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full border border-gray-300 p-3 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Min 8 chars" },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                message:
                  "Password must include numbers, lowercase, uppercase and special chars",
              },
            })}
            className="w-full border border-gray-300 p-3 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              validate: (val) =>
                val === watch("password") || "Passwords do not match",
            })}
            className="w-full border border-gray-300 p-3 rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">
            Role
          </label>
          <select
            {...register("role_id")}
            className="w-full border border-gray-300 p-3 rounded"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id.toString()}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {selectedRoleId === "2" && (
          <div className="p-4 bg-gray-50 border border-dashed border-blue-300 rounded-lg space-y-4 animate-in fade-in duration-500">
            <h3 className="font-bold text-[#23A6F0]">Store Information</h3>

            <div>
              <input
                placeholder="Store Name"
                {...register("storeName", {
                  required: "Store name required",
                  minLength: 3,
                })}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <input
                placeholder="Store Phone (+90XXXXXXXXXX)"
                {...register("storePhone", {
                  required: "Phone required",
                  pattern: {
                    value: /^(\+90|0)?5\d{9}$/,
                    message: "Valid Türkiye phone required",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <input
                placeholder="Tax ID (TXXXXVXXXXXX)"
                {...register("storeTaxId", {
                  required: "Tax ID required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "Format: T1234V123456",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <input
                placeholder="Store Bank Account (IBAN)"
                {...register("storeBankAccount", {
                  required: "IBAN required",
                  pattern: {
                    value: /TR\d{24}/,
                    message: "Valid IBAN required",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!isValid || loading}
          className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold hover:bg-[#1a8cd1] disabled:bg-gray-300 flex justify-center items-center transition-all"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;
