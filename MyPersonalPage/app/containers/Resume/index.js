/*
 *
 * Resume
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';


export default class Resume extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Resume" meta={[{ name: 'description', content: 'Description of Resume' }]} />

        <NavBar />
        <h1>Resumé Page</h1>

      </div>
    );
  }
}
