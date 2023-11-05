import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="mt-12">
        <footer className="footer p-10 bg-purple-600  text-white">
      <aside>
      <div className="flex-1 text-4xl mb-2 font-bold">
            <Link>
              eStudy<span className="text-green-600">Partners</span>
            </Link>
          </div>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
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
