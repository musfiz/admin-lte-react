import axios from "./common";
import { RequestParams } from "../types/Common";

export const getAllPeople = async (page: number, perPage?: number) => {
  const params = { page: page, per_page: perPage, delay: 1 };
  try {
    const res = await axios.get('people', { params: params });
    return res.data.data;
  }
  catch (e: any) {
    throw e;
  }
}