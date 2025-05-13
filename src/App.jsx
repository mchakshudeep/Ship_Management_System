import { AuthProvider } from './contexts/AuthContext'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PrivateRoute from './routes/PrivateRoute'
import { ShipsProvider } from './contexts/ShipsContext'
import ShipsPage from './pages/ShipsPage'

function App() {

  return (
    <AuthProvider>
      <ShipsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            <Route path="/ships" element={<PrivateRoute><ShipsPage /></PrivateRoute>} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </ShipsProvider>
    </AuthProvider>
  )
}

export default App
