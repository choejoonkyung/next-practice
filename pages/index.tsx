import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Cookie from "../utils/Cookie";

function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const logout = () => {
    Cookie.remove("auth");
    router.replace("/");
  };

  return (
    <div className={styles.container}>
      {props.auth ? (
        <>
          <p>{props.user}님</p>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <Link href="/login">login</Link>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      auth: ctx.req.cookies.auth ? true : false,
      user: ctx.req.cookies.auth ?? "",
    },
  };
};

export default Home;
