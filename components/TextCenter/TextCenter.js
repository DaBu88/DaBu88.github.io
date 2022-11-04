import Styles from "./TextCenter.module.css";

const TextCenter = (props) => {
  return (
    <article className={Styles.container}>
      <header>{props.header ? <h2>{props.header}</h2> : null}</header>
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
    </article>
  );
};

export default TextCenter;
