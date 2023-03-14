import { IMovie } from "./IMovie";

export interface IDiscover {
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
