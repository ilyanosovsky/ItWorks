import axios from "axios";
import { useAuth } from "@/auth/AuthProvider";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: string;
  dob: string;
}

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const useUserApi = () => {
  const { token } = useAuth();

  const fetchAllUsers = async (): Promise<User[]> => {
    try {
      const response = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.users;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  };

  const fetchUserById = async (userId: string): Promise<User> => {
    try {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  };

  const createUser = async (userData: Omit<User, "_id">): Promise<User> => {
    try {
      const response = await api.post("/users", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  };

  const updateUser = async (
    userId: string,
    userData: Partial<Omit<User, "_id">>
  ): Promise<User> => {
    try {
      const response = await api.put(`/users/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  };

  const deleteUser = async (userId: string): Promise<void> => {
    try {
      await api.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  };

  return { fetchAllUsers, fetchUserById, createUser, updateUser, deleteUser };
};

export default useUserApi;
