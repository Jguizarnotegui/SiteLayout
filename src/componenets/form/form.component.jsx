import React from 'react';

import './form.styles.css';

const Form = () => {
    return (
        <div className='form'>
            <form>
                <h2>Get in Touch</h2>
                <input type='text' placeholder='First & Last Name' />
                <input type='email' placeholder='Email' />
                <input type='tel' placeholder='Telephone' />
                <label>Discuss your case</label>
                <button>SEND</button>
            </form>
        </div>
    )
}

export default Form;