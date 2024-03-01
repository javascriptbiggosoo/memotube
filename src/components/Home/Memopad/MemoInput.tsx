import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  memo: string;
};

export default function MemoInput({
  onMemoSubmit,
}: {
  onMemoSubmit: (memo: string) => void;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onMemoSubmit(data.memo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="memo-input">00:00</label>
      <input id="memo-input" {...register("memo")} />
      <button type="submit">메모 저장</button>
    </form>
  );
}
