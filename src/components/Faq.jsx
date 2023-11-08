import Anim from "../Animation.json";
import Lottie from "lottie-react";

const Faq = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-5 items-center gap-6 px-12 py-8">
      <div className="md:col-span-2">
        <h2 className="text-4xl font-bold">
          <Lottie animationData={Anim} />
        </h2>
      </div>
      <div className="md:col-span-3 flex flex-col gap-2">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div
            data-aos="slide-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="collapse-title text-xl font-medium dark:bg-gray-800 dark:text-white"
          >
            How do I create or join a study group on your website?
          </div>
          <div className="collapse-content dark:bg-gray-800 dark:text-white">
            <p>
              To create a study group, sign in to your account and click on the
              Create Group button. Follow the prompts to set a group name,
              description, and privacy settings. To join a group, browse through
              the available groups and click Join on the one you are interested
              in. Some groups may require approval from the group admin.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 dark:bg-gray-800 dark:text-white">
          <input type="radio" name="my-accordion-3" />
          <div
            data-aos="slide-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="collapse-title text-xl font-medium dark:bg-gray-800 dark:text-white"
          >
            How can I invite friends to join my study group?
          </div>
          <div className="collapse-content dark:bg-gray-800 dark:text-white">
            <p>
              Our website offers a range of collaborative assignment tools,
              including shared document editing, chat, discussion forums, and
              file sharing. You can work on projects together in real-time,
              communicate effectively, and share resources seamlessly.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div
            data-aos="slide-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="collapse-title text-xl font-medium dark:bg-gray-800 dark:text-white"
          >
            What features does your website offer for collaborative assignments?
          </div>
          <div className="collapse-content dark:bg-gray-800 dark:text-white">
            <p>
              We take the security and privacy of your data seriously. Our
              platform uses encryption and follows best practices to safeguard
              your information. You have control over the privacy settings of
              your study group, and we do not share your data with third
              parties.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div
            data-aos="slide-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="collapse-title text-xl font-medium dark:bg-gray-800 dark:text-white"
          >
            Is my data and study group information secure on your website?
          </div>
          <div className="collapse-content dark:bg-gray-800 dark:text-white">
            <p>
              We take the security and privacy of your data seriously. Our
              platform uses encryption and follows best practices to safeguard
              your information. You have control over the privacy settings of
              your study group, and we do not share your data with third
              parties.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div
            data-aos="slide-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="collapse-title text-xl font-medium dark:bg-gray-800 dark:text-white"
          >
            What do I do if I encounter technical issues or need help with the
            website?
          </div>
          <div className="collapse-content dark:bg-gray-800 dark:text-white">
            <p>
              If you encounter technical issues or need assistance, visit our
              Help Center for troubleshooting guides and common questions. If
              your issue is not resolved, you can contact our support team
              through the Contact Us page, and we will be happy to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
