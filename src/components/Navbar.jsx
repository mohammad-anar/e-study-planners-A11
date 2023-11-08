import { BsCaretDownFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink
        data-aos="zoom out"
        data-aos-easing="linear"
        data-aos-duration="600"
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline border-none text-white"
            : "";
        }}
        to={"/"}
      >
        Home
      </NavLink>

      {/* dropdown  */}
      <div
        className="dropdown dropdown-hover"
      >
        <label data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="600"  tabIndex={0} className="flex items-center">
          Assignments
          <span className="text-lg">
            <BsCaretDownFill></BsCaretDownFill>
          </span>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content -right-20 text-white z-[1000000] menu  shadow bg-purple-700 mt-6 rounded-lg w-[600px] h-[50px]"
        >
          <div className="flex items-center gap-4 h-full justify-center">
            <NavLink
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="600"
              className={({ isActive, isPending }) => {
                return isPending
                  ? "Pending"
                  : isActive
                  ? "underline border-none text-white"
                  : "";
              }}
              to={"/allassignment"}
            >
              All Assignment
            </NavLink>
            <NavLink
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="600"
              className={({ isActive, isPending }) => {
                return isPending
                  ? "Pending"
                  : isActive
                  ? "underline border-none text-white"
                  : "";
              }}
              to={"/myassignment"}
            >
              MyAssignment
            </NavLink>
            <NavLink
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="600"
              className={({ isActive, isPending }) => {
                return isPending
                  ? "Pending"
                  : isActive
                  ? "underline border-none text-white"
                  : "";
              }}
              to={"/createassignment"}
            >
              Create Assignment
            </NavLink>
            <NavLink
              data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="600"
              className={({ isActive, isPending }) => {
                return isPending
                  ? "Pending"
                  : isActive
                  ? "underline border-none text-white"
                  : "";
              }}
              to={"/submittedassignment"}
            >
              Submitted Assignment
            </NavLink>
          </div>
        </ul>
      </div>
      <NavLink
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="600"
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline border-none text-white"
            : "";
        }}
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="600"
        className={({ isActive, isPending }) => {
          return isPending
            ? "Pending"
            : isActive
            ? "underline border-none text-white"
            : "";
        }}
        to={"/contact"}
      >
        Contact
      </NavLink>
    </>
  );
};

export default Navbar;
