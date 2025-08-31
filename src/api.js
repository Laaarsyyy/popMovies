import axios from "axios";

const API_KEY = "75ab153ba48e0639c38fc69126143f19";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: "en-US",
    },
})

export default api;