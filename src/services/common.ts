import axios, { AxiosHeaders } from "axios";
import { Cookies } from "react-cookie";
import { IloggedUser } from "../types/User";

export const headers = new AxiosHeaders({
  "Content-Type": "application/json",
  Accept: "application/json",
});

console.log('---Call all time---');

let payload = new Cookies().get('payload');
if (payload && payload.token) {
  headers.set('Authorization', `Bearer ${payload.token}`);
}

export const setAxiosHeader = (loggedUser: IloggedUser) => { //call from login
  headers.set('Authorization', `Bearer ${loggedUser.token}`);
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common = headers;

export default axios;


