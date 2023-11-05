import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useMyContext = () => {
    const value = useContext(AuthContext);
    return value
};

export default useMyContext;