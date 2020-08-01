import React from 'react';
import NavBar from '../../components/NavBar'
import './Contact.scss';

function Contact() {

  const navStatus = { contact: 'active' };

  return (
    <div className="Contact">
      <NavBar navStatus={ navStatus } />
      <div>Contact</div>
    </div>
  );
}

export default Contact;