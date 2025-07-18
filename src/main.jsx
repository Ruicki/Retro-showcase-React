import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // o tu archivo de estilos principal
import './styles.css' // si usas uno adicional

const rootElement = document.getElementById('root')
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
