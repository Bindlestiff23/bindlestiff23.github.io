import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
