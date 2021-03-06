import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'react-router-redux';

import HeaderContainer from './containers/HeaderContainer';
import NavigationPanelContainer from './containers/NavigationPanelContainer';
import NavToggleContainer from './containers/NavToggleContainer';
import MainContentContainer from './containers/MainContentContainer';
import FooterContainer from './containers/FooterContainer';
import store from './data/store';
import history from './data/history';
import './App.scss';


const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Helmet defaultTitle="Journals">
          <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <HeaderContainer />
        <div id="content">
          <NavigationPanelContainer />
          <NavToggleContainer
            label="Contents"
            id="side-nav-panel-toggle"
            classNames={['control-btn', 'd-none', 'd-lg-block']}
          />
          <MainContentContainer />
        </div>
        <FooterContainer />
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<IntlProvider locale="en"><App /></IntlProvider>, document.getElementById('root'));
