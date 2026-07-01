import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context/DataContext.jsx'
import { NotificationProvider } from './context/NotificationContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <NotificationProvider>
          <DataProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </DataProvider>
        </NotificationProvider>
      </AuthProvider>
  </StrictMode>,
)
