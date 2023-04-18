import { Link } from "react-router-dom"
import "./login.css"

function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Giriş</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Email giriniz" />
            <label>Şifre</label>
            <input type="password" className="loginInput" placeholder="Şifrenizi giriniz" />
            <button className="loginButton">Giriş Yap</button>
        </form>
        
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Kayıt Ol</Link>
        </button>

    </div>
  )
}

export default Login