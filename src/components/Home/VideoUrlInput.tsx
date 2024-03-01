import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  url: string;
};

export default function VideoUrlInput() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="url-input">Video URL</label>
      <input id="url-input" {...register("url")} />
      <button type="submit">ㅇ</button>
    </form>
  );
}
