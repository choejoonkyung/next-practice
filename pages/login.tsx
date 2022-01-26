import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Cookie from "../utils/Cookie";

function login(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [id, setId] = useState("");
  const router = useRouter();

  const submit = () => {
    if (!id) return;
    Cookie.create("auth", id);
    router.replace("/");
  };

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={submit}>login</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { data: "data" } };
};

export default login;
