import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Welcome back. Your account is ready to continue.')
  }

  return (
    <AuthLayout title="“We lead to Excellence.”" titleClassName="signin-heading">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <div className="label-row">
          <label htmlFor="password">Password</label>
          <Link className="text-button forgot-button" to="/forgot-password">Forgot password?</Link>
        </div>
        <div className="password-field">
          <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password" required />
          <button className="password-toggle" type="button" onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <label className="checkbox-label">
          <input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />
          <span>Keep me signed in</span>
        </label>
        <button className="submit-button" type="submit">Sign in <span aria-hidden="true">-&gt;</span></button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
      <p className="signup-prompt">New to Ablet Biotech pvt. Ltd? <Link className="text-button" to="/signup">Create an account</Link></p>
    </AuthLayout>
  )
}

export default SignInPage