/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[{ name: 'description', content: 'Description of Home' }]} />

        <NavBar />

        <section className="intro">
          <img src={require("../../images/MySonAndMe.jpg")} alt="My son and me" />
          <div className="">
            <p>I'm glad you stopped by for a visit. Please take a moment and explore my world.
            Hopefully, you'll see something that inspires you.</p>
          </div>
        </section>

      </div>
    );
  }
}
