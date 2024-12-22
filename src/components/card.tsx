"use client";
import React from "react";
import { deleteTodo, editTodo } from "@/service/mutation/todo-mutation";


export const Card = ({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: number;
}) => {
  const [isloading, setLoading] = React.useTransition();

  const deleteData = () => {
    setLoading(async () => {
      try {
        const res = await deleteTodo(id);
        console.log(res);
      } catch (error) {}
    });
  };

  const editData = () => {
    const newTitle = prompt("Enter new title:", title);
    const newDescription = prompt("Enter new description:", description);

    if (newTitle && newDescription) {
      setLoading(async () => {
        try {
          const res = await editTodo({
            title: newTitle,
            description: newDescription,
            id,
          });
          console.log("Updated data:", res);
        } catch (error) {
          console.error("Error updating data:", error);
        }
      });
    }
  };

  return (
    <div className="mb-[30px]">
      <h1 className="text-4xl text-pink-300 mb-1">{title}</h1>
      <p className="text-2xl text-pink-400 mb-3">{description}</p>
      <button
        disabled={isloading}
        onClick={deleteData}
        className="p-[10px] bg-red-400 rounded mr-[10px]"
      >
        {isloading ? "Loading..." : "delete"}
      </button>
      <button
          onClick={editData}
          className="p-[10px] bg-green-400 rounded"
        >
          Edit
        </button>
    </div>
  );
};
