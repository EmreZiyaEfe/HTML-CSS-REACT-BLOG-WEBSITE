import { Link } from "react-router-dom"
import "./register.css"

function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Kayıt Ol</span>
        <form className="registerForm">
            <label>Kullanıcı Adı</label>
            <input type="text" className="registerInput" placeholder="Kullanıcı adı giriniz" />
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Email giriniz" />
            <label>Şifre</label>
            <input type="password" className="registerInput" placeholder="Şifrenizi giriniz" />
            <button className="registerButton">Kayıt Ol</button>
        </form>
        
        <button className="registerLoginButton">
          <Link className="link" to="/login">Giriş Yap</Link>
        </button>

    </div>
  )
}

export default Register