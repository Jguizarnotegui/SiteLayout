import React from 'react';

import '../style/pages/_about.scss';
import lawyer from '../images/lawyer.jpg';

const About = () => {
    return (
        <div className=' page about'>
            <h2>Legal Experience You Can Trust</h2>
            <div className='about-content'>
                <div className='text-content'>
                    <h3>Our Background</h3>
                    <p>Occaecat ea in eiusmod irure sit dolor cillum esse mollit eu sint. Anim reprehenderit amet enim voluptate consequat laborum laboris qui. Tempor irure aliquip aute anim ullamco veniam consectetur officia proident qui culpa amet. Et et sint fugiat eu veniam ea cillum laboris. Elit commodo amet elit id. Nostrud nisi culpa deserunt sint aliquip et.</p>
                    <h3>What we stand for</h3>
                    <p>Irure Lorem ex ullamco consequat nisi minim incididunt magna anim velit. Sunt adipisicing ipsum occaecat non do officia Lorem labore consectetur. In culpa non cillum officia et amet minim tempor aliqua aliqua. Ea fugiat Lorem cillum est cupidatat nostrud. Fugiat reprehenderit sunt ut proident dolore velit qui elit ex enim nisi cupidatat. Est excepteur ex sunt ad. Et ut qui tempor nisi nisi anim officia.</p>
                    <button>Contact Us</button>
                </div>
                <div className='image-container'>
                    <img src={lawyer} alt='' />
                </div>
            </div>
        </div>
    )
}

export default About;