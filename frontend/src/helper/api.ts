import axios from "axios";
import { apiUrl } from "./urls";

export async function postHelper(url: string, data: object) {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${apiUrl}${url}/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}

export async function getHelper(url: string) {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${apiUrl}${url}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}
