import Styles from "./List.module.css";

const List = (props) => {
  return (
    <div className={Styles.wrapper}>
      <article className={Styles.container}>
        <header>{props.header ? <h2>{props.header}</h2> : null}</header>
        {props.subtext ? (
          <p className={Styles.subtext}>{props.subtext}</p>
        ) : null}
        {props.body
          ? props.body.map((nested, index) => {
              return (
                <ul className={Styles.list} key={index}>
                  <li>
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
                  </li>
                </ul>
              );
            })
          : null}
      </article>
    </div>
  );
};

export default List;
