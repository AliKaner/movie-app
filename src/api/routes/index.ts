import { api } from "..";
import { IDiscover } from "../models/IDiscover";

export const discover = async (page: number,fillters:string[]|null): Promise<IDiscover> => {
  const filter = fillters?.join('');
  const response = await api.get(
    `discover/movie${process.env.NEXT_PUBLIC_API_KEY}${filter}&sort_by=popularity.desc&with_genres=28&page=${page}`
  );
  return response.data;
};
