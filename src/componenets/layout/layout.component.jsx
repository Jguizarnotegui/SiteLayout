import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

import './layout.styles.css';

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