import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../store/reducers/auth";
import { setAxiosHeader } from "../../services/common";
import { loginWithEmail } from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import useAuth from "../../hooks/auth";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "admin@mail.com", password: "admin@365" });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [cookie, setCookie] = useCookies(['payload'], { doNotParse: true });

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);
    try {
      const response = await loginWithEmail(formData);
      console.log(response);
      if (response.status === 200) {
        setLoading(false);
        toast.success(response.data.message);
        setCookie('payload', response.data.data, {
          maxAge: 43200
        });
        localStorage.sidebar = true;
        setTimeout(() => {
          setAxiosHeader(response.data.data);
          dispatch(setCurrentUser(response.data.data));
          setIsAuthenticated(true);
          navigate('/');
        }, 2600);
      }
    }
    catch (error: any) {
      if (error.response.status === 401) {
        toast.error(error.response.data.message);
      } else {
        const validation = error.response.data.data;
        setEmailError('');
        setPasswordError('');
        if (validation.email && validation.email[0]) {
          setEmailError(validation.email[0]);
        }
        if (validation.password && validation.password[0]) {
          setPasswordError(validation.password[0]);
        }
      }
      setLoading(false);
      setDisabled(false);
    }
  }

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="login-page bg-body-secondary">
        <div className="login-box">
          <div className="login-logo">
            <a href=""><b>React</b> LTE</a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form method="POST" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input type="email" name="email" className={`form-control form-control-custom ${emailError ? 'is-invalid' : ''}`}
                    placeholder="Email" onChange={handleChange} value={formData.email} />
                  <div className="input-group-text">
                    <span className="bi bi-envelope"></span>
                  </div>
                  {emailError && (
                    <div className="invalid-feedback">
                      {emailError}
                    </div>
                  )}
                </div>
                <div className="input-group mb-3">
                  <input type="password" name="password" className={`form-control form-control-custom ${passwordError ? 'is-invalid' : ''}`}
                    placeholder="Password" onChange={handleChange} value={formData.password} />
                  <div className="input-group-text">
                    <span className="bi bi-lock-fill"></span>
                  </div>
                  {passwordError && (
                    <div className="invalid-feedback">
                      {passwordError}
                    </div>
                  )}
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
                      <button type="submit" className="btn btn-success btn-flat" disabled={disabled}>
                        {!loading && (
                          <i className="bi bi-box-arrow-in-right"></i>
                        )}
                        {loading && (
                          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        )}
                        &nbsp; Sign In
                      </button>
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
                  <i className="bi bi-google me-2"></i>
                  <i></i>
                  Sign in using Google+
                </a>
              </div>
              {/* <p className="mb-1">
                <a href="#">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="#" className="text-center">
                  Register a new membership
                </a>
              </p> */}
            </div>
          </div>
        </div>
        <ToastContainer autoClose={2000} theme="colored" />
      </div>
    </>
  )
}

export default Login;