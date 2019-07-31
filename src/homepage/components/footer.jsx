import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterComponent extends Component {
  render() {
    return (
      <div className="footer">
        <FontAwesomeIcon
          icon={['fab', 'creative-commons']}
          aria-label="Creative Commons"
        />
        Praveen's Creations.
        <a href="https://github.com/Travipraveen/ToDo-App-React" target="blank">
          <FontAwesomeIcon icon={['fab', 'github']} aria-label="Github" />
          Follow me on Github
        </a>
      </div>
    );
  }
}

export default FooterComponent;
