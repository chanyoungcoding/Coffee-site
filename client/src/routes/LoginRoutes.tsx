import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const LoginRoutes = () => {
  const username = Cookies.get('사용자명')
  return username ? <Outlet/> : <Navigate to={'/'}/>
}

export default LoginRoutes;