import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useMyContext from "../hooks/useMyContext";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location);
  const { user, loading } = useMyContext();

  if(loading) {
    return <div className="h-screen flex items-center justify-center"><span className="loading text-5xl loading-spinner text-purple-600"></span></div>
  }
  if (!user?.email) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  
      return children;
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;
