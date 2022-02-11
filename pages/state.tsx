import type { GetStaticProps, InferGetStaticPropsType } from "next";
import TestState from "../src/components/TestState";
import View from "../src/components/View";
import { useGlobalState } from "../src/providers/Global";

function StatePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { state } = useGlobalState();

  return (
    <div>
      <View id={state.id} />
      <TestState theme={state.theme} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default StatePage;
