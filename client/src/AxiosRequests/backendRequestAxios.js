import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

export const backend = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    credentials: "include",
});
