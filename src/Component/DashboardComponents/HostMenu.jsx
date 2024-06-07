import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const HostMenu = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
          .then(() => {})
          .catch(error => console.log(error));
      };
    return (
        <div>
             <NavLink to="/" className="block px-4 py-2 text-sm rounded hover:bg-blue-700"> Home</NavLink>
             <NavLink to="/dashboard/dashboard_profile" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Dashboard Home</NavLink>
          <NavLink to="/dashboard/create_edit_biodata" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Create/Edit Biodata</NavLink>
          <NavLink to="/dashboard/view_biodata" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">View Biodata</NavLink>
        
         
          <Link to="/dashboard/my_contact_request" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">My Contact Request</Link>
          <Link to="/dashboard/favorites_biodata" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">My Favorites Biodatas</Link>
          <Link to="/dashboard/got_married" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Got Married</Link>
          <button onClick={handleLogout} className="block text-sm text-white px-4 py-2 rounded hover:bg-blue-700">Logout</button>
        </div>
    );
};

export default HostMenu;