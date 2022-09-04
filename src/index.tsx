import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider} from '@apollo/client';

import {AppContainer} from './containers';

import ApolloClient from './graphql/apollo.config';
import ThemeProvider from './theme';
import {StoreProvider} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClient}>
      <ThemeProvider>
        <StoreProvider>
          <AppContainer />
        </StoreProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
