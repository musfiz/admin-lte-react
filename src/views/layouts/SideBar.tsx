import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const SideBar = () => {

  return (
    <>
      <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
        <div className="sidebar-brand">
          <a href="#" className="brand-link">
            <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-75 shadow" />
            <span className="brand-text fw-light">Admin LTE</span>
          </a>
        </div>
        <OverlayScrollbarsComponent defer options={{ scrollbars: { autoHide: 'scroll' } }}>
          <div className="sidebar-wrapper">
            <nav className="mt-2">
              <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon bi bi-speedometer"></i>
                    <p>Dashboard</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-box-seam-fill"></i>
                    <p> Widgets<i className="nav-arrow bi bi-chevron-right"></i></p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#" className="nav-link"><i className="nav-icon bi bi-circle"></i>
                        <p>Small Box</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link"><i className="nav-icon bi bi-circle"></i>
                        <p>info Box</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link"><i className="nav-icon bi bi-circle"></i>
                        <p>Cards</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-header">EXAMPLES</li>
                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-arrow-in-right"></i>
                  <p>
                    Auth
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>
                </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-arrow-in-right"></i>
                      <p>
                        Version 1
                        <i className="nav-arrow bi bi-chevron-right"></i>
                      </p>
                    </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item"> <a href="./examples/login.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                          <p>Login</p>
                        </a> </li>
                        <li className="nav-item"> <a href="./examples/register.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                          <p>Register</p>
                        </a> </li>
                      </ul>
                    </li>
                    <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-arrow-in-right"></i>
                      <p>
                        Version 2
                        <i className="nav-arrow bi bi-chevron-right"></i>
                      </p>
                    </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item"> <a href="./examples/login-v2.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                          <p>Login</p>
                        </a> </li>
                        <li className="nav-item"> <a href="./examples/register-v2.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                          <p>Register</p>
                        </a> </li>
                      </ul>
                    </li>
                    <li className="nav-item"> <a href="./examples/lockscreen.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Lockscreen</p>
                    </a> </li>
                  </ul>
                </li>
                <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle-fill"></i>
                  <p>Level 1</p>
                </a> </li>
                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle-fill"></i>
                  <p>
                    Level 1
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>
                </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Level 2</p>
                    </a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>
                        Level 2
                        <i className="nav-arrow bi bi-chevron-right"></i>
                      </p>
                    </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-record-circle-fill"></i>
                          <p>Level 3</p>
                        </a> </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-record-circle-fill"></i>
                          <p>Level 3</p>
                        </a> </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-record-circle-fill"></i>
                          <p>Level 3</p>
                        </a> </li>
                      </ul>
                    </li>
                    <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                      <p>Level 2</p>
                    </a> </li>
                  </ul>
                </li>
                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle-fill"></i>
                  <p>Level 1</p>
                </a> </li>
                <li className="nav-header">LABELS</li>
                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle text-danger"></i>
                  <p className="text">Important</p>
                </a> </li>
                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle text-warning"></i>
                  <p>Warning</p>
                </a> </li>
                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle text-info"></i>
                  <p>Informational</p>
                </a> </li>
              </ul>
            </nav>
          </div>
        </OverlayScrollbarsComponent>
      </aside>
    </>
  )
}

export default SideBar;