import { Link } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import toast, { Toaster, ToastBar } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser, user } = useMyContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((res) => {
        if (res.user) {
          toast.success("Successfully register!");
        }
        console.log(res.user);
      })
      .catch((err) => {
        toast.error(err.message)
        console.log(err);
      });
    console.log(user);
    // update user
    updateUser(name, photo)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col ">
          <div>
            <h2 className="text-4xl mb-6 font-extrabold text-purple-600">
              Reginste Now
            </h2>
          </div>
          <div className="card rounded-lg border border-purple-600 shadow-lg py-6 w-[300px] md:w-[400px] lg:w-[600px]  bg-transparent">
            <form onSubmit={handleSubmit} className="card-body ">
              {/* control 1 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-600">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="border border-purple-800 outline-none p-2 rounded-lg text-purple-600 bg-transparent"
                  required
                />
              </div>
              {/* control 2 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-600">PhotoURL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="photo"
                  className="border border-purple-800 outline-none p-2 rounded-lg text-purple-600 bg-transparent"
                  required
                />
              </div>
              {/* control 3 */}
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
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-purple-800 text-white hover:bg-purple-600"
                >
                  Sign Up
                </button>
                <div className="text-center mt-2">
                  <p className="text-purple-600 ">
                    New here? please{" "}
                    <Link
                      to={"/login"}
                      className="font-bold ml-2 underline cursor-pointer"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster>
  {(t) => (
    <ToastBar
      toast={t}
      style={{
        ...t.style,
        animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
      }}
    />
  )}
</Toaster>;
    </div>
  );
};

export default Register;
