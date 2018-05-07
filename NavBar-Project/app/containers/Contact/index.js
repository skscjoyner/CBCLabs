/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';

export default class Contact extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>

        <NavBar/>
        <h1>Contact</h1>
        &nbsp;
      </div>
    );
  }
}
