/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/Navbar';


export default class Contact extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Contact" meta={[{ name: 'description', content: 'Description of Contact' }]} />

        <NavBar />

        <section id="contact">
          <h1>CONTACT ME</h1>
          <hr />
          <form method="POST" action="form.aspx" id="contactForm">
            <p><label>Name: <input type="text" maxLength="50" required /></label></p>
            <p><label>Email: <input type="text" maxLength="30" required /></label></p>
            <p><label>Message: </label></p>
            <textarea name="comments" cols="50" rows="5" maxLength="500" required></textarea>
            <p><button type="submit">Send</button></p>
          </form>
        </section>
      </div>
    );
  }
}
