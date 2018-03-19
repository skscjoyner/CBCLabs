/*
 *
 * Projects
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import Grid from 'components/Grid';

export default class Projects extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Projects" meta={[{ name: 'description', content: 'Description of Projects' }]} />

        <NavBar />

        <Grid />
      </div>
    );
  }
}
