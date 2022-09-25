import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Curbside() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>No Online Orders</title>
      </Head>
      <body>
        <main>
          <div className="wrapper">
            <section>
              <h1>No More Online Orders/Curbside Pickup</h1>
              <svg width="200" height="200">
                <circle
                  cx="100"
                  cy="100"
                  r="100"
                  stroke="green"
                  stroke-width="4"
                  fill="yellow"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="20"
                  stroke="green"
                  stroke-width="4"
                  fill="#b47009"
                />
                <circle
                  cx="140"
                  cy="60"
                  r="20"
                  stroke="green"
                  stroke-width="4"
                  fill="#b47009"
                />
                <circle
                  cx="140"
                  cy="60"
                  r="10"
                  stroke="green"
                  stroke-width="4"
                  fill="green"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="10"
                  stroke="green"
                  stroke-width="4"
                  fill="green"
                />
                <path
                  d="M 50 150 A 45 45, 0, 0, 1, 150 150 Z"
                  fill="none"
                  stroke="green"
                  stroke-width="5"
                />
              </svg>
              <h3>
                Axis is no longer accepting curbside orders. We allow in store
                shopping, Monday - Friday from 9am -6pm and Saturday from 9am -
                5pm.
              </h3>
            </section>
          </div>
        </main>
      </body>
    </>
  );
}
