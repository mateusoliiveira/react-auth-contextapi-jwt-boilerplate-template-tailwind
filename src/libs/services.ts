import axios, { AxiosInstance } from "axios";
import { APP_SERVER_URL } from "./constants";

export const ApiServer: AxiosInstance = axios.create({
  baseURL: APP_SERVER_URL,
});
