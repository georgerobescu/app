import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import { setup as setupAnalytics } from './api/analytics'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { clientInstance } from './graphql'
import setupWeb3 from './api/web3'
import { GlobalProvider } from './GlobalState'
import './globalStyles'

window.addEventListener('load', async () => {
  setupAnalytics()

  setupWeb3().catch(_ => {})

  ReactDOM.render(
    <ApolloProvider client={clientInstance}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ApolloProvider>,
    document.getElementById('root')
  )
})

registerServiceWorker()
