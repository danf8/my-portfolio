import Footer from "./Footer";
import Nav from "./Nav";

const Layout = (props) => {
    return(
        <>
            <Nav setIsMenuOpen={props.setIsMenuOpen} isMenuOpen={props.isMenuOpen} />
            {props.children}
            <Footer />
        </>
    );
}

export default Layout;