import Nav from "../components/Nav"
import Footer from "./Footer";
const Layout = ({children}) => {
    return ( 
        <div>
            <Nav></Nav>
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;