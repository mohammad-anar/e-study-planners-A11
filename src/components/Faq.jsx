import Anim from "../Animation.json"
import Lottie from "lottie-react";

const Faq = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-5 items-center gap-6 px-12 py-8">
    <div className="md:col-span-2">
        <h2 className="text-4xl font-bold">
            <Lottie animationData={Anim}/>
        </h2>
    </div>
      <div className="md:col-span-3 flex flex-col gap-2">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
