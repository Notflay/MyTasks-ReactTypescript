import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootswatch/dist/lux/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App title='React and Typescript' />
  </React.StrictMode>,
)
