import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";
import "../styles/LoginForm.css";


const LoginForm: React.FC = () => {

  const [isLogin, setIsLogin] = useState(true);

return (
  <div className="container">

<div className={`cover ${isLogin ? "" : "flipped"}`}>

<div className="front">
<img src= "/images/security.svg" alt="Segurança" />

<div className="text">

</div>
</div>

<div className="back">
<img src= "/images/security.svg" alt="Segurança" />

</div>
</div>

     <div className="forms">
     <div className="form-content">
     <div className={`form login-form ${isLogin ? "active" : ""}`}>

       <div className="form login-form">

            <div className="title">Login</div>

            <form>
              <div className="input-boxes">

                <div className="input-box">

                  <i className="fas fa-envelope"></i>

                   <input type="text" placeholder="Digite seu email" required />
                </div>

                <div className="input-box">

                  <i className="fas fa-lock"></i>

                  <input type="password" placeholder="Digite sua senha" required />
                </div>

                <div className="button input-box">
                <input type="submit" value="Enviar"/>

                <div className="text"><a href="#">Esqueceu a senha?</a></div>
                </div>

                <div className="text sign-up-text">

                  Não tem uma conta?{" "}

                  <span onClick={() => setIsLogin(false)}>Inscreva-se agora</span>
                </div>
              </div>
            </form>
          </div>
        </div>

            <div className={`form signup-form ${!isLogin ? "active" : ""}`}>

            <div className="title">Cadastro</div>

            <form>

              <div className="input-boxes">

                <div className="input-box">

                  <i className="fas fa-user"></i>

                  <input type="text" placeholder="Digite seu nome" required />
                </div>

                <div className="input-box">

                  <i className="fas fa-envelope"></i>

                  <input type="text" placeholder="Digite seu email" required />
                </div>

                <div className="input-box">

                  <i className="fas fa-lock"></i>

                  <input type="password" placeholder="Digite sua senha" required />
                </div>

                <div className="button input-box">

                  <input type="submit" value="Enviar" />
                </div>

                <div className="text sign-up-text">
                  Já tem uma conta?{" "}

                  <span onClick={() => setIsLogin(true)}>Conecte-se agora</span>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  </div>
  );
  };

export default LoginForm;