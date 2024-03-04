import Register from '../components/Register'
import Connexion from '../components/Connexion'

function Login_Register() {
    return (
      <div className='container-form'>
        <Register />
        <div className="bar"></div>
        <Connexion/>
      </div>
    )
}

export default Login_Register