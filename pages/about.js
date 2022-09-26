import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AboutStyles from "../styles/About.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Axis</title>
      </Head>
      <body>
        <div class="wrapper">
          <div class="earthhomepagepicture" />
          <Nav />
          <main>
            <div className={AboutStyles.writtencontent}>
              <p>
                Axis Natural Foods is the longest operating natural foods store
                in the State of Maine and has been serving Central Maine since
                opening its doors in 1970. Axis has been at the forefront of
                providing high quality organic, natural and local products to
                the community.
              </p>
              <p>
                After 20 years at 250 Center Street in Auburn, we have moved to
                our new location at 120 Center Street (in the Center Street
                Plaza - across from Pat's Pizza). This move has been made
                possible by the dedication and support of our customers and
                staff. The move will enable Axis Natural Foods to offer a
                greater variety of health care products, vitamins and
                supplements, fresh local produce, bulk goods, and books, and
                will allow Axis to expand to areas such as gourmet products and
                cheeses, and a wide variety of wine, including more than 65
                organic wines and more than 100 wines priced under ten dollars.{" "}
              </p>
              <p>
                While our store will be larger, our vision will not change. Axis
                Natural Foods will continue to:
              </p>
              <ul>
                <li>
                  {" "}
                  provide quality natural and organic products delivered by a
                  knowledgeable, caring staff;
                </li>
                <li>
                  provide environmentally friendly products and actively support
                  the preservation of our natural environment;
                </li>
                <li>
                  actively seek out and support sources of locally grown organic
                  foods, recognizing their environmental and health benefits;
                </li>
                <li>maintain a clean, comfortable and attractive store;</li>
                <li>
                  sell products that reflect the community’s needs and are
                  fairly priced; and{" "}
                </li>
                <li>
                  provide a source for quality products that customers wish to
                  use for their nutritional goals and lifestyles.
                </li>
              </ul>
              <p>
                Thank you for shopping at Axis Natural Foods. <br />
                <br /> Good Health to you and the Planet too!
              </p>
            </div>
          </main>
        </div>
      </body>
      <Footer />
    </>
  );
}
