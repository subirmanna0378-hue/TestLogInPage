import { Link } from 'react-router-dom'
import logo from '../../photo/background_pic.jpeg'

const AuthLayout = ({ children, title, titleClassName = '' }) => (
  <main className="login-page min-h-screen">
    <section className="login-showcase" aria-label="Product introduction">
    </section>

    <section className="login-panel">
      <div className="login-card">
        <Link className="brand-mark login-panel-brand" to="/signin" aria-label="Ablet Biotech pvt. Ltd home">
          <img className="brand-mark-icon" src={logo} alt="" />
          <span>Ablet Biotech pvt. Ltd</span>
        </Link>
        <div className="form-heading">
          <h2 className={titleClassName}>{title}</h2>
        </div>
        {children}
      </div>
      <p className="legal-copy">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</p>
    </section>
  </main>
)

export default AuthLayout