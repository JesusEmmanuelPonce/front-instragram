import { ApolloProvider } from '@apollo/client'
import { useState } from 'react';
import client from './config/apollo'
import Auth from './pages/auth'

export default function App() {

  const [auth, setAuth] = useState(undefined)

  return (
    <ApolloProvider client={client}>
      { !auth ? < Auth/> : <h1>Logeado</h1>}      
    </ApolloProvider>
  );
}

