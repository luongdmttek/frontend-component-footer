import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { initialize, getConfig, subscribe, APP_READY } from 'frontend-platform-vi';
import { AppContext, AppProvider } from 'frontend-platform-vi/react';
import Footer from '@edx/frontend-component-footer';

import './index.scss';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <AppContext.Provider value={{
        authenticatedUser: null,
        config: getConfig(),
      }}>
        <Footer
          onLanguageSelected={() => {}}
          supportedLanguages={[
            { label: 'English', value: 'en' },
            { label: 'Español', value: 'es' },
          ]}
        />
      </AppContext.Provider>
    </AppProvider>,
    document.getElementById('root'),
  );
});

initialize({
  messages: []
});
