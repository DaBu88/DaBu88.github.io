import Head from "next/head";
import Content from "../public/Content/items.json";
import ContentMapper from "../components/ContentMapper";

export default function Items() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Items</title>
      </Head>
      <main>
        <ContentMapper content={Content} />
      </main>
    </>
  );
}
