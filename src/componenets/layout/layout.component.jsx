import React from 'react';
import Header from '../header/header.component';
import Hero from '../hero/hero.component';
import Contents from '../contents/contents.component';
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