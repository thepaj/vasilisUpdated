import React from 'react';
import Clipboard from 'clipboard';

import Email from '../images/icons/email.png';
import LinkedIn from '../images/icons/linkedin.png';
import Github from '../images/icons/github.png';

// copy email to clipboard
const clip = new Clipboard(".email-icon-box");

clip.on("success", function() {
    alert("The email address has been copied to your clipboard :)");
});
clip.on("error", function() {
    alert("That didn't work, sorry :(")
});

class Contact extends React.Component{
    render() {
        return(
            <div className='content-container'>
                    <div className='contact-title'>
                        CONTACT ME
                    </div>
                    <div className='icons-container'>
                        <div data-clipboard-text="gala.bill@gmail.com" className='email-icon-box'>
                            <img src={Email} alt='email' className='icon'/>
                            <div className='icon-name'>Email</div>
                        </div>
                        <a href="https://github.com/billDrett" target="_blank" rel="noopener noreferrer" className='icon-box'>
                            <img src={Github} alt='github' className='icon'/>
                            <div className='icon-name'>Github</div>
                        </a>
                        <a href="https://www.linkedin.com/in/79623/" target="_blank" rel="noopener noreferrer" className='icon-box'>
                            <img src={LinkedIn} alt='linkedin' className='icon'/>
                            <div className='icon-name'>LinkedIn</div>
                        </a>
                    </div>
            </div>
        )
    }
}

export default Contact;