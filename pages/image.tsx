import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { useEffect } from "react";
import src from "../assets/main.jpg";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

function image(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Image src={src} alt="Picture of the author" placeholder="blur" />
      <Image src={src} alt="Picture of the author" placeholder="blur" />
      <Image src={src} alt="Picture of the author" placeholder="blur" />
      <Image src={src} alt="Picture of the author" placeholder="blur" />
      <Image
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg"
        alt="Picture of the author"
        placeholder="blur"
        blurDataURL={props.base64}
        width={500}
        height={500}
      />{" "}
      <Image
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg"
        alt="Picture of the author"
        placeholder="blur"
        blurDataURL={props.base64}
        width={500}
        height={500}
      />{" "}
      <Image
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg"
        alt="Picture of the author"
        placeholder="blur"
        blurDataURL={props.base64}
        width={500}
        height={500}
      />
      <Image
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg"
        alt="Picture of the author"
        placeholder="blur"
        blurDataURL={props.base64}
        width={500}
        height={500}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { base64, img } = await getPlaiceholder(
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg",
    { size: 10 }
  );
  console.log(base64);
  return {
    props: { base64 },
  };
};

export default image;
