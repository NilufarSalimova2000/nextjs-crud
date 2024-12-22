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

export const createTodo = async (obj:{title:string, description: string}) => {
  const res = await fetch(`${url}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  if (!res.ok) {
    throw new Error("Error");
  }
  revalidateTag("todo-data");
  const data = await res.json();
  return data;
}

export const editTodo = async (obj:{title:string, description: string, id:number}) => {
  const res = await fetch(`${url}/todos/${obj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  if (!res.ok) {
    throw new Error("Error updating data");
  }
  revalidateTag("todo-data");

  const data = await res.json();
  return data;
};
