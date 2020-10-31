import React from 'react';
import '../style/components/_header.scss';

const Header = () => {
    return (
        <nav className='header'>
            <div className="logo"> Company Logo</div>
            <header>
                <div className="navlink">About</div>
                <div className="navlink">Common Charges</div>
                <div className="navlink">Practice Areas</div>
                <div className="navlink navbutton">Discuss Your Case</div>
            </header>
        </nav>
    )
}

export default Header;