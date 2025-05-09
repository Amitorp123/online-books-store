import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogout = () =>{
        logOut().then(() => {
            // Sign-out successful.
            alert('Sign-out successfully!!');
            navigate(from, {replace: true})
          }).catch((error) => {
            // An error happened.
          });
          
    }
  return (
    <div className='container h-screen bg-teal-100 py-10 px-10 max-0 min-w-full flex flex-col items-center justify-center'>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Are you sure you want to logout ?</h5>
      <button className='bg-red-700 px-8 py-2 gap-8 my-6 text-white rounded ' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout