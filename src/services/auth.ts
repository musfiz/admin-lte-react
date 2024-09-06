import axios, { AxiosHeaders } from "axios";
import { Cookies } from "react-cookie";
import { IloggedUser } from "../types/User";

const appUrl = import.meta.env.VITE_API_URL;

const headers = new AxiosHeaders({
  "Content-Type": "application/json",
  Accept: "application/json",
});

let loggedUser = new Cookies().get('payload');
if (loggedUser) {
  headers.set('Authorization', `Bearer ${loggedUser.token}`);
}

export const setAxiosHeader = (loggedUser: IloggedUser) => {
  headers.set('Authorization', `Bearer ${loggedUser.token}`);
}

export const loginWithEmail = async (formData: any) => {
  try {
    return await axios.post(appUrl + 'login', formData);
  }
  catch (e: any) {
    throw e;
  }
}

export const logoutUser = async () => {
  try {
    return await axios.post(appUrl + 'logout', [], { headers: headers });
  } catch (e: any) {
    throw e;
  }
}