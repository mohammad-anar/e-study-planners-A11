import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Footer from "../components/Footer";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => {
  return (
    <>
      <div className="z-40 hidden lg:block" >
        <AutoplaySlider
        className="h-screen hidden md:block"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div data-src="https://www.ice.cam.ac.uk/sites/www.ice.cam.ac.uk/files/styles/leading/public/istock-1220226086.jpg?itok=ihnlFN0h" />
          <div data-src="https://media.istockphoto.com/id/1455291834/photo/over-the-shoulder-view-unrecognizable-male-college-student-attending-online-class.webp?b=1&s=170667a&w=0&k=20&c=3UQ3Uki5e-zHlivtnjyBnCF-5yCgL_MJU7TTzWoA4C8=" />
          <div data-src="https://www.ice.cam.ac.uk/sites/www.ice.cam.ac.uk/files/styles/leading/public/istock-1220226086.jpg?itok=ihnlFN0h" />
        </AutoplaySlider>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
