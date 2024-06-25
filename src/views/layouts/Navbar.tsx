import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/reducers/ui";

const NavBar = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  let userDropdownRef = useRef();

  const dispatch = useDispatch();

  const collapsedSidebar = () => {
    dispatch(toggleSidebar());
  }

  useEffect(() => {
    let handler = (e: any) => {
      if (!userDropdownRef?.current?.contains(e.target)) {
        setUserDropdown(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  }, []);

  return (
    <>
      <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button" onClick={collapsedSidebar}>
                <i className="bi bi-list"></i>
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"> <a className="nav-link" data-widget="navbar-search" href="#" role="button"> <i className="bi bi-search"></i> </a> </li>
            <li className="nav-item dropdown"> <a className="nav-link" data-bs-toggle="dropdown" href="#"> <i className="bi bi-chat-text"></i> <span className="navbar-badge badge text-bg-danger">3</span> </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <a href="#" className="dropdown-item">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img src="../../dist/assets/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" />
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-end fs-7 text-danger"><i className="bi bi-star-fill"></i></span>
                    </h3>
                    <p className="fs-7">Call me whenever you can...</p>
                    <p className="fs-7 text-secondary"> <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
                <div className="dropdown-divider"></div> <a href="#" className="dropdown-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img src="/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-end fs-7 text-secondary"> <i className="bi bi-star-fill"></i> </span>
                      </h3>
                      <p className="fs-7">I got your message bro</p>
                      <p className="fs-7 text-secondary"> <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div> <a href="#" className="dropdown-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img src="../../dist/assets/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-end fs-7 text-warning"> <i className="bi bi-star-fill"></i> </span>
                      </h3>
                      <p className="fs-7">The subject goes here</p>
                      <p className="fs-7 text-secondary"> <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div> <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
              </div>
            </li>
            <li className="nav-item dropdown"> <a className="nav-link" data-bs-toggle="dropdown" href="#"> <i className="bi bi-bell-fill"></i>
              <span className="navbar-badge badge text-bg-warning">15</span> </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"><i className="bi bi-envelope me-2"></i> 4 new messages
                  <span className="float-end text-secondary fs-7">3 mins</span> </a>
                <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"><i className="bi bi-people-fill me-2"></i> 8 friend requests
                  <span className="float-end text-secondary fs-7">12 hours</span> </a>
                <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"><i className="bi bi-file-earmark-fill me-2"></i> 3 new reports
                  <span className="float-end text-secondary fs-7">2 days</span> </a>
                <div className="dropdown-divider"></div> <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" data-lte-toggle="fullscreen">
                <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen"></i>
                <i data-lte-icon="minimize" className="bi bi-fullscreen-exit" style={{ display: 'none' }}></i>
              </a>
            </li>

            <li className="nav-item dropdown user-menu" ref={userDropdownRef}>
              <a href="#" className={`nav-link dropdown-toggle ${userDropdown ? 'show' : ''}`} data-bs-toggle="dropdown" onClick={() => { setUserDropdown(!userDropdown) }}>
                <img src="/img/default-profile.png" className="user-image rounded-circle shadow" alt="User Image" />
                <span className="d-none d-md-inline">Mustafizur Rahman</span>
              </a>
              <ul className={`dropdown-menu dropdown-menu-lg dropdown-menu-end ${userDropdown ? 'show' : ''}`} data-bs-popper="static">
                <li className="user-header text-bg-primary">
                  <img src="/img/default-profile.png" className="rounded-circle shadow" alt="User Image" />
                  <p>
                    Mustafizur Rahman - Web Developer
                    <small>Since Dec. 2015</small>
                  </p>
                </li>
                <li className="user-body">
                  <div className="row">
                    <div className="col-4 text-center"><a href="#">Followers</a></div>
                    <div className="col-4 text-center"><a href="#">Sales</a></div>
                    <div className="col-4 text-center"><a href="#">Friends</a></div>
                  </div>
                </li>
                <li className="user-footer">
                  <a href="#" className="btn btn-default btn-flat">Profile</a>
                  <a href="#" className="btn btn-danger btn-flat float-end">Sign out</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav >
    </>
  )
}

export default NavBar;