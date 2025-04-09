import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSidebar } from "../../store/reducers/ui";
import { Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { setCurrentUser } from "../../store/reducers/auth";

const Index = () => {
  const dispatch = useDispatch();
  const [cookie] = useCookies(['payload']);
  const navSidebar = useSelector((state: any) => state.ui.sidebar);

  const handleResize = () => {
    if (window.innerWidth < 992) {
      dispatch(setSidebar(false));
    } else {
      dispatch(setSidebar(true));
    }
  }

  useEffect(() => {
    if (cookie.payload) {
      dispatch(setCurrentUser(cookie.payload));
    }
    const sidebar = localStorage.sidebar ? JSON.parse(localStorage.sidebar) : true;
    dispatch(setSidebar(sidebar));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('mousedown', handleResize);
    }
  }, []);

  return (
    <>
      <div className={`layout-fixed sidebar-expand-lg bg-body-tertiary ${navSidebar ? 'sidebar-open' : 'sidebar-collapse'}`}>
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