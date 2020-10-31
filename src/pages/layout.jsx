import React from 'react';
import Header from '../componenets/header';
import Footer from '../componenets/footer';

import '../componenets/layout.styles.css';

const Layout = (props) => {
    return (
        <div className="layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    )    
}

export default Layout;