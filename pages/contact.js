import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Content from "../public/Content/contact.json";
import ContentMapper from "../components/ContentMapper";

export default function Contact() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact</title>
      </Head>
      <main>
        <ContentMapper content={Content} />
      </main>
    </>
  );
}
