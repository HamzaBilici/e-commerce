import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { loginUser } from "../store/actions/clientActions";
import { useLocation } from "react-router-dom";

interface ILoginForm {
  email: string;
  password?: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: {  isValid },
  } = useForm<ILoginForm>({
    mode: "onChange",
    defaultValues: { rememberMe: false },
  });

  const location = useLocation<{ from?: string }>();
  /*
  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    setLoading(true);
    try {
      console.log("LOGIN START");
      await dispatch(loginUser(data, history));
      console.log("LOGIN END"); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };*/

  const onSubmit = async (data: ILoginForm) => {
    setLoading(true);
    try {
      const redirectTo = location.state?.from || "/";

      await dispatch(loginUser(data, history, redirectTo));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-20 p-8 bg-white shadow-xl rounded-lg font-montserrat">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#252B42]">
        Log In
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email gerekli" })}
            className="w-full border p-3 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#252B42] mb-2">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Şifre gerekli" })}
            className="w-full border p-3 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={!isValid || loading}
          className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-bold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
