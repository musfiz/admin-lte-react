import axios, { AxiosHeaders } from "axios";
import { Cookies } from "react-cookie";
import { IloggedUser } from "../types/User";

export const headers = new AxiosHeaders({
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

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common = headers;

export default axios;


