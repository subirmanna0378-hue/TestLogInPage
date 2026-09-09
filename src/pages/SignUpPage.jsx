import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Your account has been created successfully.')
  }

  return (
    <AuthLayout title="Welcome to Ablet Biotech pvt. Ltd">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <div className="label-row">
          <label htmlFor="password">Password</label>
        </div>
        <div className="password-field">
          <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="new-password" required />
          <button className="password-toggle" type="button" onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <label htmlFor="confirm-password">Confirm password</label>
        <input id="confirm-password" name="confirm-password" type="password" placeholder="Repeat your password" autoComplete="new-password" required />
        <button className="submit-button" type="submit">Create account <span aria-hidden="true">-&gt;</span></button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
      <p className="signup-prompt">Already have an account? <Link className="text-button" to="/signin">Sign in</Link></p>
    </AuthLayout>
  )
}

export default SignUpPage