import Styles from "./TextDouble.module.css";

const TextDouble = (props) => {
  return (
    <div className={Styles.wrapper}>
      <article className={Styles.container}>
        <header>{props.header ? <h2>{props.header}</h2> : null}</header>
        {props.body
          ? props.body.map((nested, index) => {
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
            })
          : null}
      </article>
      <article className={Styles.container}>
        <header>{props.header ? <h2>{props.header2}</h2> : null}</header>
        {props.body2
          ? props.body2.map((nested, index) => {
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
            })
          : null}
      </article>
    </div>
  );
};

export default TextDouble;
