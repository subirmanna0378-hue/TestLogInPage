import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'

const ForgotPasswordPage = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('If an account exists for that email, we sent a password reset link.')
  }

  return (
    <AuthLayout title="Reset your password">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <button className="submit-button" type="submit">Send reset link <span aria-hidden="true">-&gt;</span></button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
      <p className="signup-prompt">Remember your password? <Link className="text-button" to="/signin">Sign in</Link></p>
    </AuthLayout>
  )
}

export default ForgotPasswordPage