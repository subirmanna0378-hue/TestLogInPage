import { useState } from 'react'
import './App.css'
import logo from '../photo/Logo.jpg'

const App = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [message, setMessage] = useState('')
  const [authMode, setAuthMode] = useState('signin')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage(authMode === 'signin'
      ? 'Welcome back. Your account is ready to continue.'
      : authMode === 'signup'
        ? 'Your account has been created successfully.'
        : 'If an account exists for that email, we sent a password reset link.')
  }

  const showSignUp = () => {
    setAuthMode('signup')
    setMessage('')
    setShowPassword(false)
  }

  const showSignIn = () => {
    setAuthMode('signin')
    setMessage('')
    setShowPassword(false)
  }

  const showForgotPassword = () => {
    setAuthMode('forgot')
    setMessage('')
    setShowPassword(false)
  }

  return (
    <main className="login-page">
      <section className="login-showcase" aria-label="Product introduction">
        <div className="brand-mark" aria-label="Ablet Biotech pvt. Ltd home">
          <img className="brand-mark-icon" src={logo} alt="" />
          <span>Ablet Biotech pvt. Ltd</span>
        </div>

        <div className="showcase-copy">
          <h1>We Lead to Excellence</h1>
        </div>

        <div className="showcase-note-spacer" aria-hidden="true" />
      </section>

      <section className="login-panel">
        <div className="login-card">
          <div className="form-heading">
            <p className="eyebrow">{authMode === 'signin' ? 'Welcome back' : authMode === 'signup' ? 'Start your journey' : 'Reset access'}</p>
            <h2>{authMode === 'signin' ? 'Sign in to Ablet Biotech pvt. Ltd' : authMode === 'signup' ? 'Welcome to Ablet Biotech pvt. Ltd' : 'Reset your password'}</h2>
          </div>

          <form onSubmit={handleSubmit}>
            {authMode === 'signup' && (
              <>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
              </>
            )}
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />

            {authMode !== 'forgot' && <>
              <div className="label-row">
                <label htmlFor="password">Password</label>
                {authMode === 'signin' && <button className="text-button forgot-button" type="button" onClick={showForgotPassword}>Forgot password?</button>}
              </div>
              <div className="password-field">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </>}

            {authMode === 'signup' && (
              <>
                <label htmlFor="confirm-password">Confirm password</label>
                <input id="confirm-password" name="confirm-password" type="password" placeholder="Repeat your password" autoComplete="new-password" required />
              </>
            )}

            {authMode === 'signin' && <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Keep me signed in</span>
            </label>}

            <button className="submit-button" type="submit">
              {authMode === 'signin' ? 'Sign in' : authMode === 'signup' ? 'Create account' : 'Send reset link'} <span aria-hidden="true">-&gt;</span>
            </button>
            {message && <p className="form-message" role="status">{message}</p>}
          </form>

          <p className="signup-prompt">
            {authMode === 'signin' ? 'New to Ablet Biotech pvt. Ltd? ' : authMode === 'signup' ? 'Already have an account? ' : 'Remember your password? '}
            <button className="text-button" type="button" onClick={authMode === 'signin' ? showSignUp : showSignIn}>
              {authMode === 'signin' ? 'Create an account' : 'Sign in'}
            </button>
          </p>
        </div>
        <p className="legal-copy">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</p>
      </section>
    </main>
  )
}

export default App
