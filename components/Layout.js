import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";

const Layout = (props) => {
    return(
        <>
            <Nav />
            <Header />
            {props.children}
            <Main />
            <Footer />
        </>
    )
}

export default Layout;