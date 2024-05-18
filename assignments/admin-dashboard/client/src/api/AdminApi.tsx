import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginAdmin = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/login`, {
      username,
      password,
    });
    const token = response.data.token;
    return token;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
};
