import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'

const ChangeAccountPage = () => (
  <AuthLayout title="Change account">
    <p className="form-message">Choose how you would like to continue with Ablet Biotech pvt. Ltd.</p>
    <div className="account-actions">
      <Link className="submit-button" to="/signin">Sign in to an account <span aria-hidden="true">-&gt;</span></Link>
      <Link className="text-button" to="/signup">Create a new account</Link>
    </div>
  </AuthLayout>
)

export default ChangeAccountPage