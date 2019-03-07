import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ErrorBoundary from '~/shared/errors/ErrorBoundary';
import PrivateRoutes from '../routes/PrivateRoutes';
import PublicRoutes from '../routes/PublicRoutes';
import NavMain from './com/NavMain';
import Footer from './com/Footer';
import { userIsLoggedIn } from '~/utils/user-utils';

// Global styles.
import 'normalize.css';
import '~/lib/colors.scss';
import './App.scss';

const client = new ApolloClient({
  uri: process.env.API_URL,
  request: async operation => {
    const token = await localStorage.getItem('AUTH_TOKEN');
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  }
});

const App = () => (
  <ErrorBoundary>
    <Router>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          {userIsLoggedIn() ? (
            <>
              <NavMain />
              <PrivateRoutes />
              <Footer />
            </>
          ) : (
            <PublicRoutes />
          )}
        </ApolloHooksProvider>
      </ApolloProvider>
    </Router>
  </ErrorBoundary>
);

export default App;
