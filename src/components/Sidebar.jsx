import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn  bg-red-600 border-none text-white hover:bg-red-400": "btn  btn-ghost "
              }} to={"/"}>Home</NavLink>
              <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn  bg-red-600 border-none text-white hover:bg-red-400": "btn  btn-ghost "
              }}  to={"/allassignment"}>All Assignment</NavLink>
              <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn  bg-red-600 border-none text-white hover:bg-red-400": "btn  btn-ghost "
              }}  to={"/about"}>About</NavLink>
              <NavLink className={({isActive, isPending}) => {
                return isPending? "Pending": isActive? "underline text-red btn  bg-red-600 border-none text-white hover:bg-red-400": "btn  btn-ghost "
              }}  to={"/contact"}>Contact</NavLink>
        </>
    );
};

export default Sidebar;