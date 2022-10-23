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
          <li className={Styles.title}>
            <Link href="/">
              <a>
                <h2>axis natural foods</h2>
              </a>
            </Link>
          </li>
          <li id={Styles.home}>
            <Link href="/">
              <a className={router.pathname == "/" ? Styles.active : null}>
                Home
              </a>
            </Link>
          </li>
          <li id={Styles.items}>
            <Link href="/items">
              <a className={router.pathname == "/items" ? Styles.active : null}>
                Items
              </a>
            </Link>
          </li>
          <li id={Styles.about}>
            <Link href="/about">
              <a className={router.pathname == "/about" ? Styles.active : null}>
                About
              </a>
            </Link>
          </li>
          <li id={Styles.contact}>
            <Link href="/contact">
              <a
                className={router.pathname == "/contact" ? Styles.active : null}
              >
                Contact
              </a>
            </Link>
          </li>
          <li id={Styles.hamburger}>
            <button onClick={() => setHamOpen(!hamOpen)}>
              <div className={Styles.bar}></div>
              <div className={Styles.bar}></div>
              <div className={Styles.bar}></div>
            </button>
          </li>
        </ul>
      </div>
      <div
        id={Styles.hamburger_menu}
        className={hamOpen ? Styles.hamburger_open : Styles.hamburger_close}
      >
        <ul className={Styles.hamburger_links}>
          <li className={hamOpen ? null : Styles.hidden}>
            <Link href="/">
              <a
                className={router.pathname == "/" ? Styles.active : null}
                onClick={() => setHamOpen(0)}
              >
                Home
              </a>
            </Link>
          </li>
          <li className={hamOpen ? null : Styles.hidden}>
            <Link href="/items">
              <a
                className={router.pathname == "/items" ? Styles.active : null}
                onClick={() => setHamOpen(0)}
              >
                Items
              </a>
            </Link>
          </li>
          <li className={hamOpen ? null : Styles.hidden}>
            <Link href="/about">
              <a
                className={router.pathname == "/about" ? Styles.active : null}
                onClick={() => setHamOpen(0)}
              >
                About
              </a>
            </Link>
          </li>
          <li className={hamOpen ? null : Styles.hidden}>
            <Link href="/contact">
              <a
                className={router.pathname == "/contact" ? Styles.active : null}
                onClick={() => setHamOpen(0)}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
