import Styles from "./MainCard.module.css";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";
const MainCard = (props) => {
  return (
    <article className={Styles.wrapper}>
      <div
        className={[
          props.orientation == "right" ? Styles.card_right : Styles.card_left,
          Styles.card,
        ].join(" ")}
      >
        {props.image ? (
          <div className={Styles.image}>
            <Image
              src={props.image}
              alt={props.imageText}
              width={props.imageWidth}
              height={props.imageHeight}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : null}
        {/* The body span text has a nested array structure in JSON.
          Every entry in the "body" array is an array of text to be joined in a div
          When text is seperated with multiple entries, the odd entries (1,3,..) are bolded 
          This allows basic styling in terms of bolding. Spacing is automatically applied for the bolded item */}
        <div className={Styles.card_text}>
          <header>
            <h3>{props.header}</h3>
          </header>
          {props.body.map((nested, index) => {
            return (
              <div key={index}>
                {nested.map((element, indexNest) => {
                  if (indexNest % 2) {
                    return (
                      <span className={Styles.bold} key={indexNest}>
                        {element}
                      </span>
                    );
                  } else {
                    return <span key={indexNest}>{` ${element} `}</span>;
                  }
                })}
              </div>
            );
          })}
          {props.buttonText ? (
            <div className={Styles.card_text_button}>
              <MainButton text={props.buttonText} link={props.buttonLink} />
            </div>
          ) : (
            <div className={Styles.card_text_nobutton}></div>
          )}
        </div>
      </div>
    </article>
  );
};

export default MainCard;
