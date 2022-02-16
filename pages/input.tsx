import styled from "@emotion/styled";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import { debounce } from "throttle-debounce";
import SearchInput from "../src/components/common/SearchInput";

function InputPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      <SearchInput />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default InputPage;
