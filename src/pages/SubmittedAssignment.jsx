import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import useMyContext from "../hooks/useMyContext";
import { Helmet } from "react-helmet-async";

const SubmittedAssignment = () => {
  const { user } = useMyContext();
  console.log(user?.email);
  const [submitedData, setSubmittedData] = useState({});
  const [myId, setMyId] = useState(null);
  const [marks, setMarks] = useState(0);
  const axios = useAxios();
    const getData = async () => {
      const result = await axios.post(
        `/submittedassignment?status=pending&email=${user?.email}`
      );
      return result;
    };
    const { data, isLoading } = useQuery({
      queryKey: ["assignments"],
      queryFn: getData,
    });
    const assignments = data?.data;
  const handleClick = (e) => {
    e.preventDefault();
    const form = e.target;
    const getMarks = form.getMark.value;
    const feedback = form.feedback.value;
    const body = {
      getMarks,
      feedback,
    };
    console.log(body);
    axios
      .put(`/submittedassignment/${myId}?email=${user?.email}`, body)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          toast.success("🔥 Assignment Completed!!");
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("🚫", err.message);
      });
  };
  //   give mark func
  const handleGiveMark = (id) => {
    axios
      .get(`/submittedassignment/${id}?email=${user?.email}`)
      .then((res) => {
        setSubmittedData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
    <Helmet>
        <title>eStudyPartners-submitted_assignments</title>
      </Helmet>
      {isLoading  ? (
        <div className="flex text-lg dark:bg-dark h-screen text-purple-700 items-center justify-center min-h-screen">
          <Spinner className="w-8 h-8 mr-2" color="purple" />{" "}
          <h2>Loading....</h2>
        </div>
      ) : (
        <div className="bg-gray-200 h-screen dark:bg-black px-[5%] lg:px-[10%]">
          <h1 data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="600"  className="text-3xl md:text-5xl  font-bold text-gray-900 my-12 text-center">
            Submitted assignments
          </h1>
          <div className="grid grid-cols-1 bg-gray-200 dark:bg-black md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments?.map((crd) => (
              <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"  key={crd._id}>
                <div className="relative flex min-h-[220px] flex-col text-gray-700 bg-white dark:bg-gray-800 shadow-md rounded-md bg-clip-border">
                  <div className="p-6 pb-4 flex-1 felx flex-col h-full">
                    <h5 className="block flex-1 mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-900 dark:text-gray-100">
                      {crd?.title}
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed dark:text-gray-400">
                      Total marks: {crd.total_marks}
                    </p>
                    <p className="block flex-1 font-sans text-base antialiased font-light leading-relaxed dark:text-gray-400">
                      Examinee: {crd.name}
                    </p>
                  </div>
                  <div className="p-6 pt-0 flex-1 flex items-center justify-between">
                    <button
                      onClick={() => {
                        handleGiveMark(crd._id);
                        setMyId(crd._id);
                        setMarks(crd.total_marks);
                      }}
                      id="give-mark"
                      className=" select-none rounded-lg bg-amber-900 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-6bg-gray-900/20 transition-all hover:shadow-lg hover:shadow-purple-6bg-gray-900/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      <label htmlFor="my_modal_7">
                        <p className="py-3 px-4">Give marks</p>
                      </label>
                    </button>

                    
                    <p className="block bg-gray-200 dark:bg-gray-600 dark:text-gray-200 p-2 rounded-lg font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      Status: {crd.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* MODAL  */}
      <input
                      type="checkbox"
                      id="my_modal_7"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box px-12 py-12 min-h-[380px] dark:bg-gray-600 flex flex-col">
                        <form onSubmit={handleClick}>
                          <h2 className="mb-6 text-2xl font-bold text-gray-900">
                            Check and feedback
                          </h2>
                          <label
                            className="text-black font-semibold mb-2 dark:text-gray-300 text-sm"
                            htmlFor="assignmentpdf"
                          >
                            Assignment link:
                          </label>
                          <input
                            type="url"
                            name="assignmentlink"
                            defaultValue={submitedData?.pdfUrl}
                            id="assignmentpdf"
                            placeholder="assignment pdf link here"
                            className="input dark:bg-transparent outline-none  border-gray-900 w-full"
                          />
                          <label
                            className="text-black block mt-2 mb-1  font-semibold  dark:text-gray-300 text-sm"
                            htmlFor="assignmentpdf"
                          >
                            Get marks/{marks}
                          </label>
                          <input
                            type="number"
                            name="getMark"
                            placeholder="given marks"
                            className="input dark:bg-transparent outline-none  border-gray-900 w-full"
                          />
                          <label
                            className="text-black block mt-2 mb-1 font-semibold dark:text-gray-300 text-sm"
                            htmlFor="assignmentpdf"
                          >
                            feedback
                          </label>
                          <textarea
                            name="feedback"
                            id="feedback"
                            className="border w-full  rounded-lg dark:bg-transparent outline-none p-2 px-3 resize-none border-gray-900"
                            placeholder="feedback text here"
                            rows="2"
                          ></textarea>
                          <button
                            type="submit"
                            className="btn btn-active border-none text-white hover:bg-purple-400 mt-4 bg-gray-900"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                      <label className="modal-backdrop" htmlFor="my_modal_7">
                        Close
                      </label>
                    </div>
    </>
  );
};

export default SubmittedAssignment;
