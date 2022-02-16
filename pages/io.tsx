import styled from "@emotion/styled";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { AccordionMenuItem } from "../src/components/common/AccordionMenu";
import AnimationArea from "../src/components/common/AnimationArea";

function IOPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <AnimationArea distance={40} duration={1000}>
        <Test>테스트</Test>
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <Test>테스트</Test>
      </AnimationArea>

      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>

      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>
      <AnimationArea distance={40} duration={1000}>
        <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      </AnimationArea>

      <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
      <AccordionMenuItem title="상품안내" descNode={<div>설명</div>} />
    </>
  );
}

const Test = styled.div`
  background-color: white;
  border: solid 1px gray;
  padding: 1rem;
`;

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default IOPage;
