import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import InfoService from "../src/utils/Service/InfoService";

function info(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div></div>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await InfoService.get(ctx);

  return {
    props: {},
  };
};

export default info;
