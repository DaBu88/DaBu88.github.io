import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home Page</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/items">Items</Link>
        </li>
        <li>
          <Link href="/history">History</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
