import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useMyContext from "../hooks/useMyContext";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location);
  const { user } = useMyContext();
  if (!user?.email) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;
