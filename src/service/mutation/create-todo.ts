"use server";
const url = process.env.BACKEND_URL;
import { revalidateTag } from "next/cache";


export const CreateTodo = async (data: any) => {
  const res = await fetch(`${url}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }
  revalidateTag("todo-data");
  const Postdata = await res.json();
  return Postdata;
};