import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import src from "../assets/main.jpg";

function image(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Image src={src} alt="Picture of the author" />
      <Image src={src} alt="Picture of the author" />
      <Image src={src} alt="Picture of the author" />
      <Image src={src} alt="Picture of the author" />
      <Image src={src} alt="Picture of the author" />
      <Image src={src} alt="Picture of the author" />
      <Image src={src} alt="Picture of the author" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default image;
