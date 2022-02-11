import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useOpenTestDialog } from "../src/components/common/Dialog/TestDialog/useOpenTestDialog";

function DialogPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { open } = useOpenTestDialog();

  const click = async () => {
    const check = await open({
      title: "테스트 모달입니다.",
      description: "테스트 설명입니다.",
    });

    if (check) {
      console.log("open");
    }
  };

  return <button onClick={click}>오픈 모달</button>;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default DialogPage;
