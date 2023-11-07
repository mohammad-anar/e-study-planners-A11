import { FaLongArrowAltRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
const Assignmentdetails = () => {
  const axios = useAxios();
  const { user } = useMyContext();
  const assignment = useLoaderData();
  const {
    title,
    image,
    description,
    total_marks,
    difficulty_level,
    due_date,
    email,
  } = assignment.data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pdfUrl = form.assignmentpdf.value;
    const text = form.comment.value;
    const assignment = {
      pdfUrl,
      text,
      title,
      total_marks,
      status: "pending",
      name: user?.email || "User",
    };
    axios.post("/submittedassignment", assignment)
    .then(res => {
        console.log(res.data);
        if(res.data.insertedId) {
            toast.success(" assignment submited successfully ")
        }
    })
    .catch(err => {
        console.log(err.message);
        toast.error(err.message)
    })
  };
  return (
    <div className="relative flex md:w-3/5 mx-auto flex-col  bg-white dark:bg-black text-gray-700 dark:text-white ">
      <div className="relative  m-0 overflow-hidden mx-auto md:mx-0 text-gray-700 bg-white dark:bg-black shrink-0 bg-clip-border">
        <div className="flex h-full items-center p-6">
          <img
            src={image}
            alt="image"
            className="object-cover rounded-xl mx-auto w-full h-full"
          />
        </div>
      </div>
      <div className="p-6">
        <h4 className=" mb-2 font-sans text-2xl flex flex-col gap-1 justify-between items-start antialiased font-semibold leading-snug tracking-normal text-purple-600">
          <span>{title}</span>{" "}
          <span className="text-sm text-gray-800 dark:text-white flex items-center w-[120px]">
            Marks: {total_marks}
          </span>
        </h4>
        <div>
          <h2>
            <span className="font-bold">Creator:</span> {email}
          </h2>
          <h2>
            <span className="font-bold">Creator:</span> {due_date}
          </h2>
        </div>
        <p className="block mb-2 font-sans text-sm antialiased font-normal leading-relaxed text-gray-700">
          <span className="font-bold">Difficulty-level: </span>
          {difficulty_level}
        </p>
        <p>
          <span className=" font-bold mb-4">Description: </span>
          {description}
        </p>
        <div className="mt-6">
          <button
            htmlFor="my_modal_7"
            className="btn btn-sm hover:bg-purple-500 border-none outline-none rounded-none bg-purple-600 text-white "
          >
            <label htmlFor="my_modal_7">Take Assignment</label>
            <span>
              <FaLongArrowAltRight></FaLongArrowAltRight>
            </span>
          </button>
          {/* The button to open modal */}
          {/* <label htmlFor="my_modal_7" className="btn">
            open modal
          </label> */}

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box px-12 py-12 min-h-[380px] dark:bg-gray-600 flex flex-col">
              <form onSubmit={handleSubmit}>
                <h2 className="mb-6 text-xl font-bold text-purple-600">
                  Sumbit your assignment here
                </h2>
                <label
                  className="text-black font-semibold mb-2 dark:text-white text-sm"
                  htmlFor="assignmentpdf"
                >
                  Assignment link:
                </label>
                <input
                  type="url"
                  name="assignment-link"
                  id="assignmentpdf"
                  placeholder="assignment pdf link here"
                  className="input dark:bg-transparent outline-none  border-purple-600 w-full"
                />
                <textarea
                  name="comment"
                  id="comment"
                  className="border w-full  rounded-lg mt-4 dark:bg-transparent outline-none p-2 px-3 resize-none border-purple-600"
                  placeholder="text"
                  rows="2"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-active border-none text-white hover:bg-purple-400 mt-4 bg-purple-600"
                >
                  Submit
                </button>
              </form>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignmentdetails;
