import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
  exampleRequired2: string;
};

function FormPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input {...register("exampleRequired2", { required: true })} />
      {errors.exampleRequired2 && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { data: "data" } };
};

export default FormPage;
