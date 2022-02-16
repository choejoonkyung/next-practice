import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import { debounce } from "throttle-debounce";

function InputPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const inputText = debounce(
    300,
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      console.log(target.value);
    }
  );

  return (
    <div>
      <input type="text" name="search" onChange={inputText}></input>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default InputPage;
