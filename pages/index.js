import Head from "next/head";
import Content from "../public/Content/index.json";
import ContentMapper from "../components/ContentMapper";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <main>
        <ContentMapper content={Content} />
      </main>
    </>
  );
}
