import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/index.tsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './lib/theme.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
)
