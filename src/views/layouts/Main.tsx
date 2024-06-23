import { Outlet } from "react-router-dom";

function Main(){
  return (
    <>
      <h2>This is Main Page</h2>
      <div>
      <Outlet/>
      </div>
    </>
  )
}

export default Main;