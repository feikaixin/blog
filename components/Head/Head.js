import Head from "next/head";

export default ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title} | 雨中·漫步</title>
      </Head>
    </div>
  );
};
