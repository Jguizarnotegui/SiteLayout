import React from 'react';
import Hero from '../hero/hero.component';
import Layout from '../layout/layout.component';
import Form from '../form/form.component';
import lawyer from '../images/lawyer.jpg';

import './contents.styles.css';

const Content = ()  => {
    return (
        <Layout>
            <Hero />
            <div className='content-container'>
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
                <div className='page practice-areas'>
                    <h2>Practice Areas</h2>
                    <div className='cards'>
                        <div className='card card1'>
                            <h2>DUI</h2>
                        </div>
                        <div className='card card2'>
                            <h2>Criminal Defense</h2>
                            <p>
                            Excepteur aliquip ipsum nostrud cillum reprehenderit consequat nisi occaecat dolor esse commodo. Velit eu sunt voluptate officia sunt aliquip eu. Proident aute velit cillum culpa exercitation sint consequat.
                            </p>
                        </div>
                        <div className='card card3'>
                            <h2>Civil <br />Litigation</h2>
                        </div>
                    </div>
                    <button>Contact Us</button>
                </div>
                <div className='page legal-issues'>
                    <h2>Do you have any legal issues?</h2>
                    <div className='timeline'>
                        <div className='talk'>
                            <span>•</span><h3>Let Me Do the Talking</h3>
                            <p>Contrary to popular  belief, Lorem Ipsem is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                        </div>
                        <div className='breath'>
                            <span>•</span><h3>Take a Deep Breath</h3>
                            <p>Contrary to popular  belief, Lorem Ipsem is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                        </div>
                        <div className='patience'>
                            <span>•</span><h3>Be Patient</h3>
                            <p>Contrary to popular  belief, Lorem Ipsem is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                        </div>
                    </div>
                    <button>Contact Us</button>
                </div>
                <div className='contact'>
                    <div className='info'>
                        <h1>Los Angeles trial Lawyer</h1>
                    </div>
                    <Form />
                </div>
            </div>
        </Layout>
    )
}

export  default Content;