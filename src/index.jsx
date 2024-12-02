/*******************************************
* Name:          Mark Buster
* Date:          12-4-2024
* FileName:      index.jsx
* FileDesc:      This is the entry point file for the React application.
*                It renders the root component (AppRoutes) into the DOM
*                and wraps it in React's StrictMode for development
*                checks and optimizations.
*
********************************************/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './routes/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
