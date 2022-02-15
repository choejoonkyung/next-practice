import type { GetStaticProps, InferGetStaticPropsType } from "next";
import AnimationArea from "../src/components/common/AnimationArea";

function IOPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <AnimationArea distance={40} duration={1000}>
        h
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        h
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        h
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        h
      </AnimationArea>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default IOPage;
