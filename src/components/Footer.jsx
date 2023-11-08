import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="mt-12">
        <footer className="footer p-10 bg-purple-600 dark:bg-black dark:border-t text-white">
      <aside>
      <div data-aos="slide-right"
            data-aos-easing="linear"
            data-aos-duration="500" className="flex-1 text-4xl mb-2 font-bold">
            <Link>
              eStudy<span className="text-green-600">Partners</span>
            </Link>
          </div>
        <p data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="800" className="max-w-[250px]">
        To create a study group, sign in to your account and click on the Create Group button
        </p>
      </aside>
      <nav data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="600" > 
        <header className="font-bold text-gray-400 text-lg md:text-xl underline dark:text-white">Services</header>
        <a className="link link-hover">All Assignments</a>
        <a className="link link-hover">Create Assignments</a>
        <a className="link link-hover">Update Assignments</a>
        <a className="link link-hover">Submitted Assignments</a>
      </nav>
      <nav data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="600" >
        <header className="font-bold text-gray-400 text-xl underline dark:text-white">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="600" >
        <header className="font-bold text-gray-400 text-xl underline dark:text-white">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    <div className="bg-black text-white p-4 text-center">
        <h2>&copy; Copy Right all right reserved by eStudyPartners 20023.</h2>
    </div>
    </div>
  );
};

export default Footer;
