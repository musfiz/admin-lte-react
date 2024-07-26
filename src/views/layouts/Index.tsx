import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sidebarCollapse, sidebarOpen } from "../../store/reducers/ui";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/Navbar";

const Index = () => {

  const sidebarCollapsed = useSelector((state: any) => state.ui.sidebarCollapsed);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth < 992) {
      dispatch(sidebarCollapse())
    } else {
      dispatch(sidebarOpen())
    }
  }

  useEffect(() => {
    const currentURI = location.pathname;
    navigate(currentURI);
    handleResize();
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener('mousedown', handleResize);
    }
  }, []);

  return (
    <>
      <div className={`layout-fixed sidebar-expand-lg bg-body-tertiary ${sidebarCollapsed ? 'sidebar-collapse' : 'sidebar-open'}`}>
        <div className="app-wrapper">
          <NavBar />
          <SideBar />
          <main className="app-main">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Index;