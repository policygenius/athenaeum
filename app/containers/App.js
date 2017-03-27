import React, { Component } from 'react';
import styles from '../assets/stylesheets/application.scss';

class App extends Component {
  render () {
    return (
      <div className={ styles.containerCenter }>
        <div className={ styles.appHeaderContainer }>
          <h1 className={ styles.appHeader }>React-Webpack Boilerplate</h1>
          <p className={ styles.appText }>Basic set-up for running React with Webpack.</p>
          <p className={ styles.appText }>Dev server and production build available.</p>
        </div>
      </div>
    )
  }
}

export default App;
