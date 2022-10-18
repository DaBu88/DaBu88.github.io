import Styles from "*/Footer.module.css";
import GlobalStyles from "stylesglobals.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div class="copyright">
        <h1>
          Content copyright 2021. Axis Natural Food, Ltd. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
