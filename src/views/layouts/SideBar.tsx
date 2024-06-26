import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { sidebarCollapse } from "../../store/reducers/ui";

export interface IMenuItem {
  name: string;
  icon?: string;
  path?: string;
  children?: Array<IMenuItem>;
}

const menu: IMenuItem[] = [
  {
    name: 'Dashboard',
    icon: 'nav-icon bi bi-speedometer',
    path: '/',
  },
  {
    name: 'Blank Page',
    icon: 'nav-icon bi bi-clipboard-fill',
    path: '/blank',
  },
  {
    name: 'Widgets',
    icon: 'nav-icon bi bi-box-seam-fill',
    children: [
      {
        name: 'Small Box',
        icon: 'nav-icon bi bi-circle',
        path: '/small-box',
      },

      {
        name: 'Info Box',
        icon: 'nav-icon bi bi-circle',
        path: '/info-box',
      }
    ],
  },
];

const menuItem = menu.map((item: IMenuItem, index: number) => (
  <li className={`nav-item menu-open`} key={index}>
    <a href="#" className="nav-link">
      <i className={item.icon}></i>
      <p>{item.name} {item.children && item.children.length > 0 ? <i className="nav-arrow bi bi-chevron-right"></i> : ''}</p>
    </a>
    {item.children && item.children.length > 0 ?
      <ul className="nav nav-treeview" style={{ boxSizing: 'border-box', display: 'none' }}>
        <li className="nav-item">
          <a href="#" className="nav-link"><i className="nav-icon bi bi-circle"></i>
            <p>Small Box</p>
          </a>
        </li>
      </ul>
      : ''}
  </li >
));


const SideBar = () => {
  const menuRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    let handler = (e: any) => {
      if (window.innerWidth < 992 && !menuRef?.current?.contains(e.target)) {
        dispatch(sidebarCollapse());
      }
    }
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  }, []);

  return (
    <>
      <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark" ref={menuRef}>
        <div className="sidebar-brand">
          <a href="#" className="brand-link">
            <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-75 shadow" />
            <span className="brand-text fw-light">Admin LTE React</span>
          </a>
        </div>
        <OverlayScrollbarsComponent defer options={{ scrollbars: { autoHide: 'scroll' } }}>
          <div className="sidebar-wrapper">
            <nav className="mt-2">
              <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                {menuItem}
                {/* <li className="nav-item">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon bi bi-speedometer"></i>
                    <p>Dashboard</p>
                  </a>
                </li> */}
                {/* <li className="nav-item">
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
                </li> */}
                {/* <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle-fill"></i>
                    <p>Level 1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link"><i className="nav-icon bi bi-circle-fill"></i>
                    <p>Level 1
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#" className="nav-link"><i className="nav-icon bi bi-circle"></i>
                        <p>Level 2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-icon bi bi-circle"></i>
                        <p> Level 2 <i className="nav-arrow bi bi-chevron-right"></i></p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <a href="#" className="nav-link"><i className="nav-icon bi bi-record-circle-fill"></i>
                            <p>Level 3</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link"><i className="nav-icon bi bi-record-circle-fill"></i>
                            <p>Level 3</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link"><i className="nav-icon bi bi-record-circle-fill"></i>
                            <p>Level 3</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link"><i className="nav-icon bi bi-circle"></i>
                        <p>Level 2</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link"><i className="nav-icon bi bi-circle-fill"></i>
                    <p>Level 1</p>
                  </a>
                </li>
                <li className="nav-header">LABELS</li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle text-danger"></i>
                    <p className="text">Important</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle text-warning"></i>
                    <p>Warning</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-circle text-info"></i>
                    <p>Informational</p>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </OverlayScrollbarsComponent>
      </aside>
    </>
  )
}

export default SideBar;