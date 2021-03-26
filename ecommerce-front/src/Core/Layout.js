import React from "react";
import Menu from "./Menu";
import Footer from './Components/Footer';
import "../Styles.css";

const Layout = ({
    className,
    children
}) => (
    <div>
        <Menu />
        <div className={className}>{children}</div>
        <Footer />
    </div>
);

export default Layout;
