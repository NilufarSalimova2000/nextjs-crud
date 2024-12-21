"use client";

import { CreateTodo } from "@/service/mutation/create-todo";
import React from "react";
import { useForm } from "react-hook-form";


export const CreateForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = async (data: any) => {
    try {
      const res = await CreateTodo(data);
      console.log(res);
      reset();
    } catch (error) {
      console.error("Error");
    }
  };

  return (
    <form className="w-[400px] py-5" onSubmit={handleSubmit(submit)}>
      <div className="mt-[10px]">
        <input
          className="p-[20px] w-[100%] bg-pink-200 placeholder:text-white rounded"
          type="text"
          placeholder="Title"
          {...register("title")}
        />
      </div>
      <div className="mt-[10px]">
        <input
          className="p-[20px] w-[100%] bg-pink-300  placeholder:text-white rounded"
          type="text"
          placeholder="Description"
          {...register("description")}
        />
      </div>
      <div className="mt-[10px] w-[100%]">
        <button className="bg-red-300 p-[10px] rounded text-white" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};