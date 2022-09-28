import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ItemStyles from "../styles/Items.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import OrderFormLinkBtn from "../components/OrderFormLinkBtn";

export default function Items() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Items</title>
      </Head>
      <body>
        <div class="wrapper">
          <div class="earthhomepagepicture"></div>
          <main>
            <OrderFormLinkBtn />
            <p class="before-list">
              We try to offer as many choices of natural products as we can to
              our customers. We stock a large selection within many popular
              categories and we are happy to special order products that we
              don’t stock. Additionally, we feature many monthly and on-going
              sales on a wide variety of products. Here are some of the many
              categories of products we offer:
            </p>
            <div className={ItemStyles.productcategorylistcontainer}>
              <div class="column-1">
                Natural Foods and Groceries
                <br />
                <br />
                Special Diet Foods and Gluten-Free Products
                <br />
                <br />
                Vitamins and Supplements
                <br />
                <br />
                Wine and Beer
                <br />
                <br />
                Coffee and Tea
                <br />
                <br />
                Eco-friendly household goods
                <br />
                <br />
                Organic or Natural Health and Body Care Products
                <br />
                <br />
                Camping Foods
                <br />
                <br />
                Kitchen products
                <br />
                <br />
                Canning supplies, including jar lids and picking spices
              </div>
              <div class="column-2">
                Organic and Local Produce
                <br />
                <br />
                Macrobiotic Foods
                <br />
                <br />
                <br />
                Herbal Products
                <br />
                <br />
                Home Brewing Supplies
                <br />
                <br />
                Prepared foods
                <br />
                <br />
                Cheese Making Supplies
                <br />
                <br />
                Books addressing health, nutrition, cooking and more
                <br />
                <br />
                <br />
                Natural pet foods and supplies
                <br />
                <br />
                Cards and gifts
                <br />
                <br />
                Gardening products, including compost buckets, and earth-safe
                anti-bug products
              </div>
            </div>
            <p>
              If you are looking for something we do not carry, please don't
              hestitate to ask our staff. <br />
              <br /> We will do our best to find it for you!
            </p>
          </main>
        </div>
      </body>
    </>
  );
}
