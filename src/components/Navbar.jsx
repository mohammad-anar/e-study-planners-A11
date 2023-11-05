import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn btn-sm bg-green-600 border-none text-white hover:bg-green-400": "btn  btn-ghost btn-sm"
              }} to={"/"}>Home</NavLink>
              <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn btn-sm bg-green-600 border-none text-white hover:bg-green-400": "btn  btn-ghost btn-sm"
              }}  to={"/allassignment"}>All Assignment</NavLink>
              <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn btn-sm bg-green-600 border-none text-white hover:bg-green-400": "btn  btn-ghost btn-sm"
              }}  to={"/about"}>About</NavLink>
              <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn btn-sm bg-green-600 border-none text-white hover:bg-green-400": "btn  btn-ghost btn-sm"
              }}  to={"/contact"}>Contact</NavLink>
              <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn btn-sm bg-green-600 border-none text-white hover:bg-green-400": "btn  btn-ghost btn-sm"
              }}  to={"/register"}>Sign Up</NavLink>
              <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn btn-sm bg-green-600 border-none text-white hover:bg-green-400": "btn  btn-ghost btn-sm"
              }}  to={"/createassignment"}>Create Assignment</NavLink>
        </>
    );
};

export default Navbar;