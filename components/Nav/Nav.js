import Styles from "./Nav.module.css";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState, useEffect } from "react";

const Nav = () => {
  const [hamOpen, setHamOpen] = useState(0);
  const router = useRouter();
  return (
    <nav>
      <div className={Styles.nav}>
        <ul className={Styles.links}>
          <li id={Styles.hamburger}>
            <button onClick={() => setHamOpen(!hamOpen)}>
              <div className={Styles.bar}></div>
              <div className={Styles.bar}></div>
              <div className={Styles.bar}></div>
            </button>
          </li>
          <li className={Styles.title}>
            <Link href="/">
              <span>axis natural foods</span>
            </Link>
          </li>
          <li id={Styles.home}>
            <Link
              className={router.pathname == "/" ? Styles.active : null}
              href="/"
            >
              <span>Home</span>
            </Link>
          </li>
          <li id={Styles.items}>
            <Link
              href="/items"
              className={router.pathname == "/items" ? Styles.active : null}
            >
              <span>Items</span>
            </Link>
          </li>
          <li id={Styles.about}>
            <Link
              href="/about"
              className={router.pathname == "/about" ? Styles.active : null}
            >
              <span>About</span>
            </Link>
          </li>
          <li id={Styles.contact}>
            <Link
              href="/contact"
              className={router.pathname == "/contact" ? Styles.active : null}
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        id={Styles.hamburger_menu}
        className={hamOpen ? Styles.hamburger_open : Styles.hamburger_close}
      >
        <ul className={Styles.hamburger_links}>
          <li className={hamOpen ? null : Styles.hidden}>
            <Link
              href="/"
              className={router.pathname == "/" ? Styles.active : null}
              onClick={() => setHamOpen(0)}
            >
              <span>Home</span>
            </Link>
          </li>
          <li className={hamOpen ? null : Styles.hidden}>
            <Link
              href="/items"
              className={router.pathname == "/items" ? Styles.active : null}
              onClick={() => setHamOpen(0)}
            >
              <span>Items</span>
            </Link>
          </li>
          <li className={hamOpen ? null : Styles.hidden}>
            <Link
              href="/about"
              className={router.pathname == "/about" ? Styles.active : null}
              onClick={() => setHamOpen(0)}
            >
              <span>About</span>
            </Link>
          </li>
          <li className={hamOpen ? null : Styles.hidden}>
            <Link
              href="/contact"
              className={router.pathname == "/contact" ? Styles.active : null}
              onClick={() => setHamOpen(0)}
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
