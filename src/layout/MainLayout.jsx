import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useMyContext from "../hooks/useMyContext";
import { TbMailHeart } from "react-icons/tb";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const MainLayout = ({ children }) => {
  const [mode, setMode] = useState("light");
  const {user, logout} = useMyContext();

  const handleMood = () => {
    if(mode === "light") {
      setMode("dark")
    }else{
      setMode("light")
    }
  }
  useEffect(() => {
    const html = document.documentElement;
    html.classList = mode;
  },[mode])

  return (
    <div className="drawer dark:bg-black">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
       { user && <div className="bg-black  text-white p-1 py-3 px-[5%]">
          <h2 className="flex items-center justify-center gap-2"><TbMailHeart className="text-xl text-purple-700"></TbMailHeart>Email: {user.email}</h2>
        </div>}
        {/* Navbar */}
        <div className="w-full navbar bg-purple-700 text-white px-[5%]">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-xl md:text-3xl font-bold">
            <Link >
              eStudy<span className="text-green-600">Partners</span>
            </Link>
          </div>
          <div className="flex-1  hidden lg:block">
            <div className="flex flex-wrap items-center gap-2 text-md font-semibold mr-12">
              {/* Navbar menu content here */}
              <Navbar></Navbar>
            </div>
          </div>
          <div onClick={handleMood} className="text-lg lg:text-2xl p-1 border rounded-full border-white font-bold mx-6">
            {
              mode === "light"? <BsSun></BsSun>:<BsMoon></BsMoon>
            }
          </div>
          {/* dropdown  */}
            {
                !user? <Link to={"/login"} className="text-sm font-medium ml-8 btn btn-sm text-white btn-success">Login</Link>: <div className="dropdown dropdown-end">
              <label tabIndex={0} className="flex items-center">
                <img
                  data-aos="flip-left"
                  data-aos-delay="80"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out"
                  className="w-[40px] lg:w-[50px] rounded-full"
                  src={user?.photoURL}
                  alt="User"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-50 relative menu p-4 pt-12 shadow text-center bg-purple-600 -mr-8 mt-5 rounded-box w-80  text-white"
              >
                <div>
                  <img
                    className="w-[80px] lg:w-[90px]  rounded-full block mx-auto"
                    src={user?.photoURL}
                    alt="User"
                  />
                  <h2 className="text-xl font-bold mb-2">
                    {user?.displayName}
                  </h2>
                  <p className="mb-1">{user?.email}</p>
                </div>
                <hr />
                <button
                  onClick={() => {
                    logout()
                    .then(() => {
                      toast.success("Successfully logout");
                    }).catch(err => {
                      toast.err(err.message)
                    })
                  }}
                  className="btn btn-sm mt-4 font-bold cursor-pointer"
                >
                  Log out
                </button>
              </ul>
            </div>
            }
        </div>
        {children}
      </div>
      {/* drawer  */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu mt-28 z-50 p-4 w-80 min-h-full bg-purple-600 text-white">
          {/* Sidebar content here */}
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
