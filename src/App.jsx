import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ChangeAccountPage from './pages/ChangeAccountPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/signin" replace />} />
    <Route path="/signin" element={<SignInPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    <Route path="/change-account" element={<ChangeAccountPage />} />
    <Route path="*" element={<Navigate to="/signin" replace />} />
  </Routes>
)

export default App
