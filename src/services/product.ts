import axios from "./common";
import { RequestParams } from "../types/Common";

export const getAllProducts = async (page: number, perPage?: number) => {
  const params = { page: page, per_page: perPage, delay: 1 };
  try {
    return await axios.get('products', { params: params });
  }
  catch (e: any) {
    throw e;
  }
}