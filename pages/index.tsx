import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Cookie from "../src/utils/Cookie";
import { useGlobalState } from "../src/providers/Global";

function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { state } = useGlobalState();

  const logout = () => {
    Cookie.remove("auth");
    router.replace("/");
  };

  return (
    <div className={styles.container}>
      <nav>{state.user ? <p>내정보</p> : <p>로그인</p>}</nav>
      {props.auth ? (
        <>
          <div>
            <span>토큰: {props.token}</span>
            <button>
              <Link href="/info">info</Link>
            </button>
          </div>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <button>
          <Link href="/login">login</Link>
        </button>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      auth: ctx.req.cookies.auth ? true : false,
      token: ctx.req.cookies.auth ?? "",
    },
  };
};

export default Home;
