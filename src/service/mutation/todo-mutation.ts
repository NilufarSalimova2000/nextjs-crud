"use server";
const url = process.env.BACKEND_URL;
import { revalidateTag } from "next/cache";

export const deleteTodo = async (id: number | string) => {
  const res = await fetch(`${url}/todos/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Error");
  }
  revalidateTag("todo-data");

  const data = await res.json();

  return data;
};
