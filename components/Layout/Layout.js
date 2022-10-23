import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Nav />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
