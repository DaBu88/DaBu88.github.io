import Hero from "./Hero/Hero";
import MainCard from "./MainCard/MainCard";
import TextDouble from "./TextDouble/TextDouble";
import TextCenter from "./TextCenter/TextCenter";
import List from "./List/List";

const ContentMapper = (props) => {
  return (
    <>
      {props.content.map((element, index) => {
        switch (element.type) {
          case "Hero":
            return (
              <section>
                <Hero
                  body={element.body}
                  svg={element.svg}
                  buttonText={element.buttonText}
                  buttonLink={element.buttonLink}
                />
              </section>
            );
          case "Card":
            return (
              <section>
                <MainCard
                  orientation={element.orientation}
                  image={element.image}
                  imageText={element.imageText}
                  imageWidth={element.imageWidth}
                  imageHeight={element.imageHeight}
                  header={element.header}
                  body={element.body}
                  buttonText={element.buttonText}
                  buttonLink={element.buttonLink}
                />
              </section>
            );
          case "TextDouble":
            return (
              <section>
                <TextDouble
                  header={element.header}
                  body={element.body}
                  header2={element.header2}
                  body2={element.body2}
                />
              </section>
            );
          case "TextCenter":
            return (
              <section>
                <TextCenter header={element.header} body={element.body} />
              </section>
            );
          case "List":
            return (
              <section>
                <List
                  header={element.header}
                  subtext={element.subtext}
                  body={element.body}
                />
              </section>
            );
        }
      })}
    </>
  );
};

export default ContentMapper;
