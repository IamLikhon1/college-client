import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaGraduationCap } from 'react-icons/fa';

const NavBar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      toast.success('LOG OUT Successfully')

    })
    .catch(error=>console.log(error))
  }
    const navItem=
    <>
        <li className="text-base"> <Link to='/'>Home</Link> </li>           
            <li className="text-base"> <Link to='/colleges'>Colleges</Link> </li> 
            <li className="text-base"> <Link to='/admission'>Admission</Link> </li>

            <li className="text-base"> <Link to='/myCollege'>My College</Link> </li>

        
            { user? <>
                <span className="flex items-center">
                <p className="text-sm text-[#ff4d89] mr-2 cursor-pointer"> {user?.displayName} </p>
                <p><img className="w-10 h-10 rounded-full mr-10" src={user?.photoURL} alt="" /></p>
                 
                </span>
                 </>
                 :
                 <></>}

           {user?<li onClick={handleLogout} className="ml-3 btn  bg-[#ff4d89] hover:bg-[#ff4d89] text-white rounded-xl hover:rounded-2xl"> Log Out</li>:<li className="ml-3 btn btn-info rounded-xl "> <Link to='/login'>Login</Link> </li>}

          
   
    
    
    </>
    return (
        <>
            <div className="navbar bg-base-200 shadow-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center ">
      {navItem}
        </ul>
    </div>
   <span className="text-4xl text-orange-400 ml-8"> <FaGraduationCap></FaGraduationCap></span>
    <Link to='/'> <span className="btn btn-ghost text-base md:text-xl items-center text-black">Collegiate<span className="text-orange-500">Nexus</span></span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
 
</div>
            
        </>
    );
};

export default NavBar;