import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-kif5pjieddl5zmo6.us.auth0.com"
    clientId="QQzh76bbCWiXc4eINjGijiLZ7bLr5Rq1"
    authorizationParams={{
      redirect_uri: "https://priyanshreact.netlify.app/home"
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
)
