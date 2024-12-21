"use client";
import React from "react";
import { deleteTodo } from "@/service/mutation/todo-mutation";
import { editTodo } from "@/service/mutation/edit-todo";
import { useDispatch } from "react-redux";
import { EditDataReducer } from "@/store/reducers/reducer";

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
  const dispatch = useDispatch();

  const deleteData = () => {
    setLoading(async () => {
      try {
        const res = await deleteTodo(id);
        console.log(res);
      } catch (error) {}
    });
  };

  const EditData = () => {
    // You don't need to use `useSelector` here as title and description are already passed as props
    const EditTitle = prompt("Enter Title", title);
    const EditDes = prompt("Enter Description", description);
    if (EditTitle && EditDes && id) {
      // Update Redux state
      dispatch(EditDataReducer({ title: EditTitle, description: EditDes }));

      // Persist the changes to the backend
      editTodo({ id, data: { title: EditTitle, description: EditDes } })
        .then((updatedData) => {
          console.log("Data updated:", updatedData);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
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
          onClick={EditData}
          className="p-[10px] bg-green-400 rounded"
        >
          Edit
        </button>
    </div>
  );
};
