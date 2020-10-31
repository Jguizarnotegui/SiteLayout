import React from 'react';
import Hero from './hero';
import About from './about';
import Layout from './layout';
import Form from '../componenets/form';

import '../style/pages/_contents.scss';

const Content = ()  => {
    return (
        <Layout>
            <Hero />
            <div className='content-container'>
                <About/>
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