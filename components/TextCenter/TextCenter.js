import Styles from "./TextCenter.module.css";

const TextCenter = (props) => {
  return (
    <div className={Styles.container}>
      {props.header ? <h2>{props.header}</h2> : null}
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
    </div>
  );
};

export default TextCenter;
