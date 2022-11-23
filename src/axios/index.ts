import axios from "axios";
import { Error, FilmsProps } from "../interface/interfaces";

async function axiosFunction(url: string) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error: any) {
    console.log(error);
  }
}

export async function getFilms(url: string) {
  try {
    const films: any = await axiosFunction(url);
    return films;
  } catch (error) {}
}
