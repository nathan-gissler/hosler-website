import React from 'react'
import ReactDOM from 'react-dom/client'
import { LangContextProvider } from './LangContextProvider.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </React.StrictMode>,
)
