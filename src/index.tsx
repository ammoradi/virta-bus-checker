import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import {AppContainer} from './containers'

import reportWebVitals from './reportWebVitals';
import ApolloClient from './graphql/apollo.config'
import ThemeProvider from './theme'
import {StoreProvider} from './store'

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
