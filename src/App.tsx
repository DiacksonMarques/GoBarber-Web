import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalSyled from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalSyled />
    </Router>
  </>
);
export default App;
