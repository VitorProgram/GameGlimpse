import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Globals from './Globals.style.ts'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <React.StrictMode>
      <App />
      <Globals />
    </React.StrictMode>
  </MantineProvider>
)
