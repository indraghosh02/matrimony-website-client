import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
// import useRole from '../../hooks/useRole';

const Navbar = () => {
   const {user , logOut} = useContext(AuthContext);
  //  const [role, isLoading ] = useRole()
  //  console.log(role, isLoading);

   const handleLogout = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.log(error));
   }

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (

    <>
      <NavLink to="/" className="text-black font-bold hover:text-gray-400 block py-2 ">Home</NavLink>
      <NavLink to="/biodata" className="text-black font-bold hover:text-gray-400 block py-2">Biodata</NavLink>
      <NavLink to="/about" className="text-black font-bold hover:text-gray-400 block py-2">About Us</NavLink>
      <NavLink to="/contact" className="text-black font-bold hover:text-gray-400 block py-2">Contact Us</NavLink>
      
      {
        user ? <>
        
        {/* <button onClick={handleLogout} className="bg-red-600 text-white  px-4 py-2 rounded hover:bg-blue-600" >Logout</button> */}
        <NavLink to="/dashboard/dashboard_profile" className="bg-red-600 text-white  px-4 py-2 rounded hover:bg-blue-600">dashboard</NavLink>
        </> :  
        <>
        <NavLink to="/login" className="bg-red-600 text-white  px-4 py-2 rounded hover:bg-blue-600">Login</NavLink>
        </> 
      }
    </>
  );

  return (
    <nav className="lg:ml-28 lg:mr-28  bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://i.ibb.co/YWq2tYz/5aa5d08e-fa33-4218-ac49-2f67cb49e9c3.jpg" alt="Logo" className="h-8 w-8 mr-2 rounded-full" />
          <h2 className="text-black text-lg font-semibold font-cursive"><span className='text-red-800'> Love </span> Link</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end space-x-6 mr-6">
          {navLinks}
        </div>
        {/* <div className="hidden md:block">
          <NavLink to="/login" className="bg-red-600 text-white  px-4 py-2 rounded hover:bg-blue-600">Login</NavLink>
        </div> */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none ml-2">
            <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {navLinks}
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;



// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = (
//     <>
//       <NavLink to="/" className="text-black hover:text-gray-400 block py-2">Home</NavLink>
//       <NavLink to="/biodata" className="text-black hover:text-gray-400 block py-2">Biodata</NavLink>
//       <NavLink to="/about" className="text-black hover:text-gray-400 block py-2">About Us</NavLink>
//       <NavLink to="/contact" className="text-black hover:text-gray-400 block py-2">Contact Us</NavLink>
//     </>
//   );

//   return (
//     <nav className="fixed z-10 bg-transparent p-4 w-full">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img src="https://i.ibb.co/YWq2tYz/5aa5d08e-fa33-4218-ac49-2f67cb49e9c3.jpg" alt="Logo" className="h-8 w-8 mr-2 rounded-full" />
//           <h2 className="text-black text-lg font-semibold font-cursive"><span className='text-red-800'> Love </span> Link</h2>
//         </div>
//         <div className="hidden md:flex flex-1 justify-center space-x-4">
//           {navLinks}
//         </div>
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none ml-2">
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden mt-2 space-y-2">
//           {navLinks}
//           <NavLink to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 block">Login</NavLink>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
