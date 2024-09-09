import axios from "./common";

export const loginWithEmail = async (formData: any) => {
  try {
    return await axios.post('login', formData);
  }
  catch (e: any) {
    throw e;
  }
}

export const logoutUser = async () => {
  try {
    return await axios.post('logout', []);
  } catch (e: any) {
    throw e;
  }
}