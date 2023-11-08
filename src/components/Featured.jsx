import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const Featured = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div className="max-w-[100vw] px-[2%] md:px-[3%] lg:px-[4%] h-screen max-h-[400px] bg-gray-200 dark:bg-black">
      <h2
        data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="text-3xl md:text-5xl font-bold  text-amber-900 py-12 text-center"
      >
        Featured section
      </h2>
      <div ref={sliderRef} className="keen-slider h-3/4 rounded-xl">
        <div className="keen-slider__slide number-slide1 w-[600px] rounded-xl min-w-[300px]  bg-white dark:bg-gray-800 border dark:border-none  shadow-xl">
          <div className="card card-compact h-full">
            <div className="w-full h-[5px] mt-3 bg-amber-600"></div>
            <div className="card-body flex flex-col justify-between h-full">
              <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="400"
                className="card-title min-h-[30px] dark:text-green-600 "
              >
                Featured Study Groups
              </h2>
              <p
                data-aos="slide-right"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="sm:max-h-[80px] dark:text-white md:h-full overflow-hidden"
              >
                Select a few study groups each week or month to be featured in
                this section.
              </p>
              <div className="card-actions flex items-end justify-end">
                <img data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                  className="max-w-[50px] lg:mr-3 lg:mb-3"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-house-home-building-infrastructure-real-estate-resident-emoj-symbol-1-30743.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 w-[600px] rounded-xl min-w-[300px]  bg-white dark:bg-gray-800 border dark:border-none shadow-xl">
          <div className="card card-compact h-full ">
            <div className="w-full h-[5px] mt-3 bg-blue-600"></div>
            <div className="card-body flex flex-col justify-between">
              <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="card-title min-h-[30px] dark:text-amber-600"
              >
                Member Stories
              </h2>
              <p
                data-aos="slide-right"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="sm:max-h-[80px] dark:text-white md:h-full overflow-hidden"
              >
                Alongside the featured groups, share success stories and
                testimonials from members
              </p>
              <div className="card-actions flex items-end justify-end">
                <img data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                  className="max-w-[60px] lg:mr-3 lg:mb-3"
                  src="https://cdn2.iconfinder.com/data/icons/comics-style-vol-2/128/vip-512.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 w-[600px] rounded-xl min-w-[300px]  bg-white dark:bg-gray-800 border dark:border-none shadow-xl ">
          <div className="card card-compact  h-full">
            <div className="w-full h-[5px] mt-3 bg-green-600"></div>
            <div className="card-body flex flex-col justify-between">
              <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="600"
                className="card-title min-h-[30px] dark:text-secondary"
              >
                Activity Highlights
              </h2>
              <p
                data-aos="slide-right"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="sm:max-h-[80px] dark:text-white md:h-full overflow-hidden"
              >
                Highlight recent and outstanding activities within the featured
                study groups
              </p>
              <div className="card-actions flex items-end justify-end">
                <img data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                  className="max-w-[60px] md:mr-3 md:mb-3"
                  src="https://cdn-icons-png.flaticon.com/512/5044/5044139.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 w-[600px] rounded-xl min-w-[300px]  bg-white dark:bg-gray-800 border dark:border-none shadow-xl">
          <div className="card card-compact  h-full">
            <div className="w-full h-[5px] mt-3 bg-amber-900"></div>
            <div className="card-body flex flex-col justify-between ">
              <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800"
                className="card-title min-h-[30px] dark:text-blue-600"
              >
                Interviews or Q&A
              </h2>
              <p
                data-aos="slide-right"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="sm:max-h-[80px] dark:text-white md:h-full overflow-hidden"
              >
                {" "}
                Consider conducting short interviews or Q&A sessions with the
                group leaders or active members of the spotlighted study groups
              </p>
              <div className="card-actions flex items-end justify-end">
                <img data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                  className="max-w-[50px] lg:mr-3 lg:mb-3"
                  src="https://cdn-icons-png.flaticon.com/512/4150/4150865.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
