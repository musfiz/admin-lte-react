import { Link } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { sidebarCollapse } from "../store/reducers/ui";

export interface IMenuItem {
  name: string;
  icon?: string;
  path?: string;
  isExpand?: boolean,
  isActive?: boolean,
  children?: Array<IMenuItem>;
}

const menu: IMenuItem[] = [
  {
    name: 'Dashboard',
    icon: 'nav-icon bi bi-speedometer',
    path: '/',
    isActive: false
  },
  {
    name: 'Blank Page',
    icon: 'nav-icon bi bi-clipboard-fill',
    path: '/blank',
    isActive: false
  },
  {
    name: 'Widgets',
    icon: 'nav-icon bi bi-box-seam-fill',
    isExpand: false,
    children: [
      {
        name: 'Info Box',
        icon: 'nav-icon bi bi-circle',
        path: '/info-box',
        isActive: false
      },
      {
        name: 'Cards',
        icon: 'nav-icon bi bi-circle',
        path: '/card',
        isActive: false
      }
    ],
  },
  {
    name: 'UI',
    icon: 'nav-icon bi bi-tree-fill',
    isExpand: false,
    children: [
      {
        name: 'Tables',
        icon: 'nav-icon bi bi-circle',
        path: '/table',
        isActive: false
      },

      {
        name: 'General Elements',
        icon: 'nav-icon bi bi-circle',
        path: '/element',
        isActive: false
      }
    ],
  },
]


const SideBar = () => {
  const menuRef = useRef();
  const dispatch = useDispatch();

  const [menuItem, setMenuItem] = useState(menu);

  const menuExtended = (e: any, index: number,) => {
    menuItem[index].isExpand = !menuItem[index].isExpand;
    menuItem.map((item, i) => {
      if (i !== index) {
        menuItem[i].isExpand = false;
        return { ...item };
      }
    });
    setMenuItem([...menuItem]);
  }

  const menuActive = (index: number) => {
    menuItem[index].isActive = !menuItem[index].isActive;
    menuItem.map((item, i) => {
      if (i !== index) {
        item.isActive = false;
        return { ...item };
      }
    });
    menuItem.map((item, i) => {
      item.isExpand = false;
      return { ...item };
    })
    setMenuItem([...menuItem]);
  }

  const childMenuActive = (parentIndex: number, childIndex: number) => {
    menuItem.map((item: any, i: number) => {
      item.isActive = false;
      item.children?.map((item2: any, j: number) => {
        if (i === parentIndex && j === childIndex) {
          item2.isActive = true;
        } else {
          item2.isActive = false;
        }
        return { ...item2 }
      })
      return { ...item };
    });
    setMenuItem([...menuItem]);
  }

  const menuItemHtml = menuItem.map((item, i) => (
    <li className={`nav-item ${item.children?.length == 0 && item.isActive ? 'active' : ''} ${item.children && item.isExpand ? 'menu-open' : ''}`} key={i}>
      {!item.children ?
        (<Link to={`${item.path}`} className={`nav-link ${item.isActive ? 'active' : ''}`} onClick={() => menuActive(i)}>
          <i className={item.icon}></i>
          <p>{item.name}</p>
        </Link>
        ) : (
          <Link to={'#'} className="nav-link" onClick={(e) => menuExtended(e, i)}>
            <i className={item.icon}></i>
            <p>{item.name} {item.children && item.children.length > 0 ? <i className="nav-arrow bi bi-chevron-right"></i> : ''}</p>
          </Link>
        )
      }
      {
        item.children && item.children.length > 0 ?
          (<ul className="nav nav-treeview">
            {item?.children.map((item2: IMenuItem, j: number) => (
              <li className="nav-item" key={j}>
                <Link to={item2.path} className={`nav-link ${item2.isActive ? 'active' : ''}`} onClick={() => childMenuActive(i, j)}>
                  <i className="nav-icon bi bi-circle"></i>
                  <p>{item2.name}</p>
                </Link>
              </li>
            ))}
          </ul>
          )
          : ''
      }
    </li >
  ));

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
                {menuItemHtml}
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
      </aside >
    </>
  )
}

export default SideBar;