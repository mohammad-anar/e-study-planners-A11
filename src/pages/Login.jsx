
import { Link, useNavigate } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";



const Login = () => {  
  const {user} = useMyContext();
  const axios = useAxios();
const navigate = useNavigate();
const {signInUser} = useMyContext();

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password);
  // login user 
  signInUser(email, password)
  .then(res => {
    console.log(res.user);
      toast.success("Successfully login!");
      axios.post("/access-token", {email : user.email}).then(() => {
        navigate("/")
      }).catch(err => toast.success(err.message))
      
    
  })
  .catch(err => {
    toast.error(err.message);
  })
}
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
       
        <div className="hero-content flex flex-col ">
        <div>
          <h2 className="text-4xl mb-6 font-extrabold text-purple-600">Log In Now</h2>
        </div>
          <div className="card rounded-lg border border-purple-600 shadow-lg py-6 w-[300px] md:w-[400px] lg:w-[600px]  bg-transparent">
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-600">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="border border-purple-800 outline-none p-2 rounded-lg text-purple-600 bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-600">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="border border-purple-800 outline-none p-2 rounded-lg text-purple-600 bg-transparent"
                  required
                />
                <Link className="mt-2 text-purple-600 underline">Forgot password ?</Link>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-800 text-white hover:bg-purple-600">Login</button>
               <div className="text-center mt-2">
               <p className="text-purple-600 ">New here? please <Link to={"/register"} className="font-bold ml-2 underline cursor-pointer">Sign Up</Link></p>
               </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
