import MainButton from "../MainButton/MainButton";
import Styles from "./Hero.module.css";
import Image from "next/image";
import TreeSVG from "../../public/tree-svgrepo-com 1.svg";
const Hero = (props) => {
  const svgArr = [<TreeSVG key={0} alt="Tree logo" />];
  return (
    <div className={Styles.container}>
      <div className={Styles.body}>
        <h1>{props.body}</h1>
        <MainButton
          className={Styles.body_button}
          text={props.buttonText}
          link={props.buttonLink}
        />
      </div>
      <div className={Styles.svg}>
        {svgArr.map((component, index) => {
          if (index == props.svg) {
            return component;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Hero;
