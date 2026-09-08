import { useState } from 'react'
import './App.css'

const App = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [message, setMessage] = useState('')
  const [authMode, setAuthMode] = useState('signin')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage(authMode === 'signin'
      ? 'Welcome back. Your account is ready to continue.'
      : 'Your account has been created successfully.')
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

  return (
    <main className="login-page">
      <section className="login-showcase" aria-label="Product introduction">
        <div className="brand-mark" aria-label="Test home">
          <span className="brand-mark-icon">T</span>
          <span>Test</span>
        </div>

        <div className="showcase-copy">
          <p className="eyebrow">Your ideas, in focus</p>
          <h1>Make space for what matters.</h1>
          <p className="showcase-description">
            Test brings your projects, notes, and next steps together in one calm,
            considered workspace.
          </p>
        </div>

        <div className="showcase-note">
          <span className="note-line" />
          <span>Designed for your best work</span>
        </div>
      </section>

      <section className="login-panel">
        <div className="login-card">
          <div className="mobile-brand brand-mark" aria-label="Test home">
            <span className="brand-mark-icon">T</span>
            <span>Test</span>
          </div>
          <div className="form-heading">
            <p className="eyebrow">{authMode === 'signin' ? 'Welcome back' : 'Start your journey'}</p>
            <h2>{authMode === 'signin' ? 'Sign in to Test' : 'Create your Test account'}</h2>
            <p>{authMode === 'signin' ? 'Pick up right where you left off.' : 'A thoughtful workspace for everything ahead.'}</p>
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

            <div className="label-row">
              <label htmlFor="password">Password</label>
              {authMode === 'signin' && <a href="#forgot-password">Forgot password?</a>}
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
              {authMode === 'signin' ? 'Sign in' : 'Create account'} <span aria-hidden="true">-&gt;</span>
            </button>
            {message && <p className="form-message" role="status">{message}</p>}
          </form>

          <p className="signup-prompt">
            {authMode === 'signin' ? 'New to Test? ' : 'Already have an account? '}
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
