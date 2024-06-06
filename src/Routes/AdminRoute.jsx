import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth(); 
    const [role, isLoading] = useRole();
    const location = useLocation();

    if(loading || isLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && role === 'admin') {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;


// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { Navigate, useLocation } from "react-router";
// import useRole from "../hooks/useRole";


// const PrivateRoute = ({ children }) => {
//     const { user, loading } = useContext(AuthContext);
//     const location = useLocation();

//     if(loading){
//         return <progress className="progress w-56"></progress>
//     }

//     if (user) {
//         return children;
//     }
//     return <Navigate to="/login" state={{from: location}} replace></Navigate>
// };

// export default PrivateRoute;
