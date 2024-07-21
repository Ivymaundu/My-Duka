import React from 'react'
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "73430386540-5s8h1ng2t8qp4qfpa3n73vrs3p0mkldi.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>

      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </React.StrictMode>
  </GoogleOAuthProvider>,
)
