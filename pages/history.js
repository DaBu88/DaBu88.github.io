import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function History() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>History</title>
      </Head>
      <body>
        <div class="wrapper">
          <div class="earthhomepagepicture"></div>
          <Nav />
          <main>
            <div class="written-content">
              <p>
                The organic food movement grew out of the seeds of thought that
                action needed to be taken to save the environment and protect
                our children from the overuse of toxic chemicals. Organic
                farming was spurred on by the "Back to the Land" movement. The
                belief was that to be living simply and using sustainable
                farming techniques would be better for people and the planet and
                create a safe and reliable food supply for the future.
              </p>
              <p>
                In the early 1970s, Axis Natural Foods was a Maine pioneer in
                the organic farming movement and the purveying of natural
                products. Axis Natural Foods was a vital part of the vibrant
                downtown Lewiston/Auburn community. We will continue to be
                dedicated to serving the State of Maine and beyond with room to
                grow at our new location at 120 Center Street Plaza in Auburn,
                Maine.
              </p>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}
