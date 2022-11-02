import Styles from "./MainButton.module.css";
import Link from "next/link";
const MainButton = (props) => {
  return (
    <Link href={props.link ? props.link : "/"}>
      <button className={Styles.button}>
        <p>{props.text}</p>
      </button>
    </Link>
  );
};

export default MainButton;
