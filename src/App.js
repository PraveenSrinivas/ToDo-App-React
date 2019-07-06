import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faTrash,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

import './App.css';
import HeaderComponent from './homepage/components/header';
import MainContainerComponent from './homepage/components/mainContainer';
import FooterComponent from './homepage/components/footer';

library.add(fab, faCheckSquare, faCoffee, faTrash, faEdit);

function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <MainContainerComponent />
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
