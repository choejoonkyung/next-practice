import axios from "axios";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import useSWR, { SWRConfig } from "swr";

type Data = {
  firstName?: string;
  lastName?: string;
};

const fetcher = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((e) => console.log(e));

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const article = await fetcher("http://localhost:3000/api/mock");
  return {
    props: {},
  };
};

function Article() {
  // `data`는 `fallback`에 있기 때문에 항상 사용할 수 있습니다.
  // const { data } = useSWR<Data[]>("/api/mock", fetcher);
  return (
    <>
      {[]!.map((v, i) => (
        <p key={i}>{}</p>
      ))}
    </>
  );
}

function SWRPrenderPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article>
      <SWRConfig
        value={{
          fallback: props.fallback,
        }}
      >
        <Article />
      </SWRConfig>
    </article>
  );
}

export default SWRPrenderPage;
