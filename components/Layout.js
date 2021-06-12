import Nav from "../components/nav"
import Footer from '../components/footer'
import Head from 'next/head'


const Layout = ({ children}) => {
    return (
        <div>
            <Nav/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;