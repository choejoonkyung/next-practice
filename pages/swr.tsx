import type { GetStaticProps, InferGetStaticPropsType } from "next";
import AsyncBoundary from "../components/common/AsyncBoundary";
import ErrorView from "../components/ErrorView";
import View from "../components/View";

function Swr(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <p>결과</p>

      <AsyncBoundary
        ErrorFallback={(props) => <ErrorView {...props} />}
        SuspenseFallback={<div>loading</div>}
      >
        <View />
      </AsyncBoundary>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Swr;
