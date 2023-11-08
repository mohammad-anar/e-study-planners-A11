import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Featured from "../components/Featured";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => {
  return (
    <>
      <div className="z-0 " >
        <AutoplaySlider
        className="h-screen hidden z-0 md:block"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div data-src="https://www.ice.cam.ac.uk/sites/www.ice.cam.ac.uk/files/styles/leading/public/istock-1220226086.jpg?itok=ihnlFN0h" />
          <div data-src="https://media.istockphoto.com/id/1455291834/photo/over-the-shoulder-view-unrecognizable-male-college-student-attending-online-class.webp?b=1&s=170667a&w=0&k=20&c=3UQ3Uki5e-zHlivtnjyBnCF-5yCgL_MJU7TTzWoA4C8=" />
          <div data-src="https://www.ice.cam.ac.uk/sites/www.ice.cam.ac.uk/files/styles/leading/public/istock-1220226086.jpg?itok=ihnlFN0h" />
        </AutoplaySlider>
      </div>
      {/* featured section  */}
      <section>
        <div>
        <Featured></Featured>
        </div>
      </section>
      {/* faq section  */}
      <section>
        <div className="mt-20 px-[10%]">
          <h2 className="text-5xl font-bold border-b-2 border-purple-600 w-[200px] text-center mx-auto pb-4 text-purple-600">FA&Q</h2>
        </div>
        <Faq></Faq>
      </section>
      {/* footer  */}
      <section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Home;
