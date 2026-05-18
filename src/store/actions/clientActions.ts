import { axiosInstance } from "../../api/axiosInstance";
import type { Dispatch } from "redux";
import { toast } from "react-toastify";

export const SET_USER = "SET_USER";
export const setUser = (user: any) => ({ type: SET_USER, payload: user });

export const loginUser =
  (loginData: any, history: any, redirectTo: string = "/") =>
  async (dispatch: any) => {
    try {
      console.log("1. Giriş isteği API'ye gönderiliyor...");
      const response = await axiosInstance.post("/login", loginData);

      localStorage.setItem("token", response.data.token);
      axiosInstance.defaults.headers.common["Authorization"] =
        response.data.token;

      console.log("2. Token kaydedildi. Store güncelleniyor...");
      dispatch(setUser(response.data));

      toast.success(`Hoş geldin, ${response.data.name || "Kullanıcı"}!`);

      console.log("3. Dinamik adrese yönlendiriliyor:", redirectTo);

      if (history && typeof history.push === "function") {
        history.push(redirectTo);
      } else {
        window.location.href = redirectTo;
      }
    } catch (error: any) {
      console.error(
        "Login hatası detayları:",
        error.response?.data || error.message || error,
      );
      toast.error(
        error.response?.data?.message || "Giriş yapılırken bir hata oluştu!",
      );
    }
  };

export const verifyToken = () => {
  return async (dispatch: Dispatch, getState: () => any) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const currentUser = getState().client.user;

    if (currentUser?.verified) return;
    if (currentUser && currentUser.token && currentUser.email) return;

    try {
      axiosInstance.defaults.headers.common["Authorization"] = token;
      const response = await axiosInstance.get("/verify");

      dispatch(
        setUser({
          ...response.data,
          token,
          verified: true,
        }),
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        axiosInstance.defaults.headers.common["Authorization"] =
          response.data.token;
      }
    } catch (error) {
      console.error("Token doğrulama başarısız, oturum temizleniyor:", error);
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
      dispatch(setUser({}));
    }
  };
};
