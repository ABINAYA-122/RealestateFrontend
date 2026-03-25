import API from "./axios";

export const loginUser = (data: any) => {
  return API.post("/auth/login", data);
};