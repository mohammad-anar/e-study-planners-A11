import { BsCaretDownFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline btn hover:bg-black w-full hover:text-purple-600 border-none text-purple-600"
            : "btn btn-ghost w-full";
        }}
        to={"/"}
      >
        Home
      </NavLink>

      {/* dropdown  */}
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="flex items-center">
          <NavLink
            className={({ isActive, isPending }) => {
              return isPending
                ? "Pending"
                : isActive
                ? "underline btn hover:bg-black w-full hover:text-purple-600 border-none text-purple-600"
                : "btn btn-ghost w-full";
            }}
            to={"/allassignment"}
          >
            Assignments
          </NavLink>
          <span className="text-lg">
            <BsCaretDownFill></BsCaretDownFill>
          </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content  text-white z-[1000000] menu  shadow bg-purple-700 rounded-lg "
        >
          <div className="flex items-center w-[200px] py-4 flex-col gap-4 h-full justify-center">
            <NavLink
              className={({ isActive, isPending }) => {
                return isPending
                  ? "Pending"
                  : isActive
                  ? "underline btn hover:bg-black w-full hover:text-purple-600 border-none text-purple-600"
                  : "btn btn-ghost w-full";
              }}
              to={"/allassignment"}
            >
              All Assignment
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) => {
                return isPending
                  ? "Pending"
                  : isActive
                  ? "underline btn hover:bg-black w-full hover:text-purple-600 border-none text-purple-600"
                  : "btn btn-ghost w-full";
              }}
              to={"/myassignment"}
            >
              MyAssignment
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) => {
                return isPending
                  ? "Pending"
                  : isActive
                  ? "underline btn hover:bg-black w-full hover:text-purple-600 border-none text-purple-600"
                  : "btn btn-ghost w-full";
              }}
              to={"/createassignment"}
            >
              Create Assignment
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) => {
                return isPending
                  ? "Pending"
                  : isActive
                  ? "underline btn hover:bg-black w-full hover:text-purple-600 border-none text-purple-600"
                  : "btn btn-ghost w-full";
              }}
              to={"/submittedassignment"}
            >
              Submitted Assignment
            </NavLink>
          </div>
        </ul>
      </div>
      <NavLink
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline btn hover:bg-black w-full hover:text-purple-600 border-none text-purple-600"
            : "btn btn-ghost w-full";
        }}
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline btn hover:bg-black w-full hover:text-purple-600 border-none text-purple-600"
            : "btn btn-ghost w-full";
        }}
        to={"/contact"}
      >
        Contact
      </NavLink>
    </>
  );
};

export default Sidebar;
