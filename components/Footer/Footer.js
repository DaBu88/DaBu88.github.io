import Styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <button>
        <Link href={"https://www.facebook.com/AxisNaturalFoods/"}>
          <Image
            src="/./../public/img/facebookLogo.png"
            alt="Facebook Icon"
            width="58"
            height="58"
          />
        </Link>
      </button>
      <p className={Styles.text}>
        Content copyright 2021. Axis Natural Food, Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
