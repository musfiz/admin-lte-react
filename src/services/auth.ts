import axios from "axios";

const appUrl = import.meta.env.VITE_API_URL

export const loginWithEmail = async (formData: any) => {
  try {
    return await axios.post(appUrl + 'login', formData);
  }
  catch (e: any) {
    throw e;
  }
}