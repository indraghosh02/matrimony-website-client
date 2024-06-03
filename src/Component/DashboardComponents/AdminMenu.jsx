import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const AdminMenu = () => {
    const { user, logOut } = useContext(AuthContext);

     const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };
    return (
        <div>
            <NavLink to="/" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Home</NavLink>
            <NavLink to="/dashboard/dashboard_profile" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Your profile</NavLink>
          
          <NavLink to="/dashboard/dashboard" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Admin Dashboard</NavLink>
          <NavLink to="/dashboard/manage" className="block px-4 py-2 text-sm rounded hover:bg-blue-700"> Manage Users</NavLink>
        <button onClick={handleLogout} className="block text-sm text-white px-4 py-2 rounded hover:bg-blue-700">Logout</button> 
        </div>
    );
};

export default AdminMenu;