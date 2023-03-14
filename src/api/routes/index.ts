import { api } from "..";
import { IDiscover } from "../models/IDiscover";

export const discover = async (page: number): Promise<IDiscover> => {
  const response = await api.get(
    `discover/movie${process.env.NEXT_PUBLIC_API_KEY}&sort_by=popularity.desc&with_genres=28&page=${page}`
  );
  return response.data;
};
