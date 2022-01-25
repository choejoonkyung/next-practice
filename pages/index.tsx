import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <div className={styles.container}>{props.data}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { data: "data" } };
};

export default Home;
