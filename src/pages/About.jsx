
const About = () => {
    return (
        <div className="px-[2%] md:px-[3%] lg:px-[4%]">
      <h1
        className="text-5xl my-12 font-bold text-center text-teal-600"
        data-aos="flip-right"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        A Few Word About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div
          data-aos="fade-up-right"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="order-2 lg:order-1"
        >
          <p className="text-gray-400 mb-6">
          Welcome to our online group study platform, where learning becomes a collaborative adventure. Connect with like-minded students and learners from around the world to form study groups, engage in real-time video discussions, share study materials, and achieve academic excellence together. Join us today and embark on a journey of interactive learning, knowledge sharing, and collective success
          </p>
          <button className="btn btn-lg bg-teal-600 text-white">
            Read More
          </button>
        </div>
        <div className="order-1 lg:order-3">
          <img
            className="h-[300px] rounded-xl block mx-auto"
            src="https://blogs.deakin.edu.au/deakinlife/wp-content/uploads/sites/63/2021/04/online-study-group2-blog-banner.jpg"
            alt="institute"
            data-aos="fade-up-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
    );
};

export default About;