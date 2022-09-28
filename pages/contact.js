import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact</title>
      </Head>
      <body>
        <div class="wrapper">
          <div class="earthhomepagepicture"></div>
          <main>
            <ContactForm></ContactForm>
          </main>
        </div>
      </body>
    </>
  );
}
