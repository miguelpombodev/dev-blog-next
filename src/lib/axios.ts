import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_GITHUB_BASE_URL,
});
