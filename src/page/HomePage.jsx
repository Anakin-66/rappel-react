import Footer from "../component/Footer";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import Nav from "../component/Nav";

function HomePage() {
    return (
        <>
            <Header />
            <h2>La home page</h2>
            <Nav />
            <Footer />
        </>
    )
}

export default HomePage;