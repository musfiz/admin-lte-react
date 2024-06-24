function Login() {
  return (
    <>
      <div className="login-page bg-body-secondary">
        <div className="login-box">
          <div className="login-logo">
            <a href=""><b>Admin</b>LTE</a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form action="" method="post">
                <div className="input-group mb-3">
                  <input type="email" className="form-control form-control-custom" placeholder="Email" />
                  <div className="input-group-text">
                    <span className="bi bi-envelope"></span>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control form-control-custom" placeholder="Password" />
                  <div className="input-group-text">
                    <span className="bi bi-lock-fill"></span>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember Me
                      </label>
                    </div>
                  </div>                  
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-success btn-flat">Sign In</button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="social-auth-links text-center mb-3 d-grid gap-2">
                <p>- OR -</p>
                <a href="#" className="btn btn-primary btn-flat">
                  <i className="bi bi-facebook me-2"></i> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-danger btn-flat">
                  <i className="bi bi-google me-2"></i> Sign in using Google+
                </a>
              </div>
              <p className="mb-1">
                <a href="#">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="#" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;