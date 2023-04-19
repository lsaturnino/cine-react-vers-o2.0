function Login() {
  return (
    <body className="body-login">
        <div className="mayn-layout">
        <div className="header-login">
            <div className="logo">
                <a href="#">
                    <img src="./public/images/cine.png" alt="" />
                </a>
            </div>
        </div>


        <div className="login_body">
            <div className="login_box">
                <h2>Entrar</h2>
                <form>
                    <div className="input_box">
                    <input style={{fontfamily: 'FontAwesome'}} required type="email" placeholder="&#xf0e0; Email"/>
                    </div>

                    <div className="input_box">
                    <input style={{fontfamily: 'FontAwesome'}} required type="password"  placeholder="&#xf084; Senha" />
                    </div>

                    <div>
                        <button className="submit">
                            Entrar
                        </button>
                    </div>
                </form>

                <div className="support">
                    <div className="remember">
                        <span><input type="checkbox" style={{margin: '0',padding: '4',height: '13px'}} /></span>
                        <span>Lembre-se de mim</span>
                    </div>
                    <div className="help">
                    <p>Precisa de <a href="#">ajuda?</a></p>

                    </div>
                </div>

                <div className="login_footer">
                    
                    <div className="sign_up">
                    <p>Ainda não possui uma conta? <a href="#">Crie uma!</a></p>
                        
                    </div>
                    <button class="submit">
                            <i class= "fa-brands fa-google"></i>
                            Login através do Google
                        </button>
                </div>
            </div>
        </div>
    </div>
</body>
  );
}

export default Login;