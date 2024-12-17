import axios from "axios";
const phrasesUrl = import.meta.env.VITE_PHRASES_URL;
export const phrasesAxios = axios.create({ baseURL: phrasesUrl });
