import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import InfoService from "../utils/Service/InfoService";

function info(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div></div>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await InfoService.get();
  return {
    props: {},
  };
};

export default info;
