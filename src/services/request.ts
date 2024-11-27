import { LoginBody, RegisterBody, UserUpdateBody } from "@/models";
import { apiInstance } from "@/services/api";

export const requestService = () => {
  const userRetrieveCurrent = async () => {
    return apiInstance.get(`user/current/`);
  };
  const userUpdateCurrent = async (body: UserUpdateBody) => {
    return apiInstance.put(`user/current/`, body);
  };
  const userRegister = async (body: RegisterBody) => {
    return apiInstance.post(`user/auth/register/`, body);
  };
  const userLogin = async (body: LoginBody) => {
    return apiInstance.post(`user/auth/login/`, body);
  };
  const userLogout = async () => {
    return apiInstance.post(`user/auth/logout/`);
  };

  return {
    userRetrieveCurrent,
    userUpdateCurrent,
    userRegister,
    userLogin,
    userLogout,
  };
};
