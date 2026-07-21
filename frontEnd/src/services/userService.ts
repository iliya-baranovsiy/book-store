import { api } from "../api/axios";
import type { TUser, TSavedBooks } from "../types/user.types";

export async function getProfile() {
  const response = await api.get<TUser>("/user/profile");
  return response.data;
}

export async function updatePassword(password: string, new_password: string) {
  const response = await api.patch("/user/profile", {
    password,
    new_password,
  });
  return response.status;
}

export async function getSaved() {
  const response = await api.get<TSavedBooks>("/user/saved");
  return response.data;
}

export async function addSaved(book_id: number) {
  const response = await api.post("/user/saved", {
    book_id,
  });
  return response.status;
}

export async function deleteSaved(book_id: number) {
  const response = await api.delete("/user/saved", {
    data: {
      book_id,
    },
  });
  return response.status;
}
