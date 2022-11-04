import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
const Layout = ({ children }) => {
  return (
    <body>
      <Nav />
      {children}
      <Footer />
    </body>
  );
};

/*
<Hero
        body={Content[0].body}
        svg={Content[0].svg}
        buttonText={Content[0].buttonText}
        buttonLink={Content[0].buttonLink}
      />
        <MainCard
          orientation={Content[1].orientation}
          image={Content[1].image}
          imageWidth={Content[1].imageWidth}
          imageHeight={Content[1].imageHeight}
          header={Content[1].header}
          body={Content[1].body}
          buttonText={Content[1].buttonText}
          buttonLink={Content[1].buttonLink}
        ></MainCard>
        <MainCard
          orientation={Content[2].orientation}
          image={Content[2].image}
          imageWidth={Content[2].imageWidth}
          imageHeight={Content[2].imageHeight}
          header={Content[2].header}
          body={Content[2].body}
          buttonText={Content[2].buttonText}
          buttonLink={Content[2].buttonLink}
        ></MainCard>
        <TextDouble
          header={Content[3].header}
          body={Content[3].body}
          header2={Content[3].header2}
          body2={Content[3].body2}
        ></TextDouble>
*/
export default Layout;
