import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useMyContext from "../hooks/useMyContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { BsCollectionPlayFill, BsMoon, BsSun } from "react-icons/bs";
import { BiHomeAlt, BiUserCheck } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";

const MainLayout = ({ children }) => {
  const [mode, setMode] = useState("light");
  const { user, logout } = useMyContext();

  const handleMood = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  useEffect(() => {
    const html = document.documentElement;
    html.classList = mode;
  }, [mode]);

  return (
    <div className="drawer dark:bg-black">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {user && (
          <div className="bg-black  text-white p-1 py-3 px-[5%] flex items-center justify-center gap-2 flex-col sm:flex-row sm:gap-12 flex-wrap">
            <h2 className="flex items-center justify-center gap-2">
              <BiUserCheck className="text-xl text-amber-700"></BiUserCheck>
              user: {user.email}
            </h2> 
            <div className="flex items-center gap-4 ">
              <Link to={"/"}><BiHomeAlt></BiHomeAlt></Link>
              <Link to="/friends"><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd></Link>
              <Link><BsCollectionPlayFill></BsCollectionPlayFill></Link>
              <Link><PiShareFat></PiShareFat></Link>
              
              
              

            </div>
          </div>
        )}
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
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="flex-1 px-2 mx-2 text-xl md:text-3xl font-bold"
          >
            <Link>
              eStudy<span className="text-amber-900">Partners</span>
            </Link>
          </div>
          <div className="flex-2  hidden lg:block">
            <div className="flex items-center gap-4 text-sm mr-12">
              {/* Navbar menu content here */}
              <Navbar></Navbar>
            </div>
          </div>
          <div data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="600" 
            onClick={handleMood}
            className="text-lg lg:text-xl  border-white font-bold mx-6"
          >
            {mode === "light" ? <BsSun></BsSun> : <BsMoon></BsMoon>}
          </div>
          {/* dropdown  */}
          {!user ? (
            <Link
              to={"/login"}
              className="text-sm font-medium ml-8 btn btn-sm text-white bg-amber-900"
            >
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="flex items-center">
                <img
                  data-aos="flip-left"
                  data-aos-delay="80"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out"
                  className="min-w-[40px] w-[40px] lg:w-[50px] rounded-full"
                  src={user?.photoURL}
                  alt="User"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-50 relative menu p-4 pt-12 shadow text-center bg-purple-600 -mr-3 md:-mr-6 xl:-mr-12 mt-3 rounded-box w-80  text-white"
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
                      })
                      .catch((err) => {
                        toast.err(err.message);
                      });
                  }}
                  className="btn btn-sm mt-4 font-bold cursor-pointer"
                >
                  Log out
                </button>
              </ul>
            </div>
          )}
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
        <div className="menu mt-28 z-[100000000] flex flex-col items-center justify-start p-4 w-80 min-h-screen bg-purple-600 text-white">
          {/* Sidebar here */}
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
