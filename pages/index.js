import Head from "next/head";
import OrderFormLinkBtn from "../components/OrderFormLinkBtn";
import Image from "next/image";
import HomeStyles from "../styles/Home.module.css";
import WineImage from "../public/wineimage.jpg";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <body>
        <div class="wrapper">
          <div class="earthhomepagepicture"></div>
          <Nav />
          <main>
            <div>
              <p className={HomeStyles.shoppingoptionsannouncement}>
                AXIS IS OPEN TO IN-STORE SHOPPING.
                <br />
                WE WILL ALSO BE CONTINUING CURBSIDE SERVICE. PLEASE SEE BELOW
                FOR DETAILS
              </p>
              <div className={HomeStyles.whitebox}>
                <label for="shoppingconditions">
                  <u>
                    Axis is open to shoppers under the following conditions:
                  </u>
                </label>
                <ul>
                  <li>
                    Limit of 50 customers in the store at a time -- solo
                    shopping if possible
                  </li>
                  <li class="whtbxli2">
                    masks or cloth face coverings must be worn over mouth and
                    nose upon entering the building and at all times while in
                    the store
                  </li>
                  <li>
                    Personal shopping bags are allowed. If using your own bag,
                    we ask that the customer bag their purchases
                  </li>
                </ul>
                <label for="curbsidepickup">
                  <u>
                    Curbside will continue to be offered with the following
                    changes:
                  </u>
                </label>
                <ul>
                  <li>
                    Online orders will be fulfilled for pickup on the
                    <span>following business day</span>{" "}
                    {`(i.e., if you place an
                    order online on Monday, it will be available for pickup on
                    Tuesday)`}
                  </li>
                  <li>
                    To pickup the <span>same day</span> please place your order
                    over the phone by calling 207-782-3348
                  </li>
                  <li>
                    If ordering by phone, please call during our normal business
                    hours. Please do not leave orders on voicemail during off
                    hours to ensure that your order is fulfilled
                  </li>
                </ul>
              </div>
            </div>
            <OrderFormLinkBtn />
            <div className={HomeStyles.covidstatement}>
              <p>
                Axis Natural Foods has been a part of this community for 50
                years! During this time we want to continue to provide the
                products that are part of your lives while taking into account
                the health of our employees and their families, as well as our
                customers.
              </p>
              <br />
              <p>
                Thank you for your patience and understanding as we implement
                these changes.{" "}
              </p>
            </div>
            <hr class="hrspecial" />
            <div className={HomeStyles.storedescription}>
              <div class="textdescription">
                <Image
                  className={HomeStyles.wineimage}
                  src={WineImage}
                  alt="Wine Image"
                />
                <p>
                  Welcome to Axis Natural Foods - Central Maine's trusted local
                  source for natural and organic foods since 1970.
                  <br />
                  <br />
                  We are a family run business dedicated to providing the
                  highest quality natural, organic and sustainable foods and
                  goods delivered by a knowledgeable and caring staff.
                  <br />
                  <br />
                  We offer a full array of natural foods, groceries, organic
                  produce, an extensive line of vitamins and supplements,
                  special diet foods, macrobiotic foods, herbal products,
                  cruelty-free body care products, wine and beer, home brewing
                  supplies, eco-friendly household goods, books, natural pet
                  foods and supplies, and much, much more.
                  <br />
                  <br />
                  We have moved to a new, larger space at 120 Center Street in
                  Auburn, in the Center Street Plaza. This move has allowed us
                  to significantly expand the selection of great products we
                  offer our customers. Please also come see our new, hand picked
                  wine and beer section, with more than 60 organic wines, and
                  more than 100 wines priced at less than ten dollars.
                  <br />
                  <br />
                  Thank you Central Maine for 50 great years, and counting!
                </p>
              </div>
            </div>
            <div class="contact_and_hours">
              <div class="hours">
                <h3>new hours effective november 19th, 2020</h3>
                <p>
                  Monday: 9:00 to 6:00 <br />
                  Tuesday: 9:00 a.m. to 6:00 p.m. <br />
                  Wednesday: 9:00 a.m. to 6:00 p.m. <br />
                  Thursday: 9:00 a.m. to 6:00 p.m. <br />
                  Friday: 9:00 a.m. to 6:00 p.m. <br />
                  Saturday: 9:00 a.m. to 5:00 p.m. <br />
                  Sunday: Closed
                </p>
              </div>
              <div class="locationcontact">
                <p>
                  Axis Natural Foods <br />
                  120 Center Street <br />
                  Auburn, ME 04210 <br />
                  207-782-3348
                </p>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}
