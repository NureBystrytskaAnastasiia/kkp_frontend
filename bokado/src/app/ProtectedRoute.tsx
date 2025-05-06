import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const user = useSelector((state: any) => state.user.user);  

  if (!user) {
    return <Navigate to="/main" />;  
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/main" />;  
  }

  return <Outlet />; 
};

export default ProtectedRoute;