import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useMyContext from "../hooks/useMyContext";
import { useState } from "react";

const MyAssignment = () => {
  const [submitedData, setSubmittedData] = useState({});
  const { user } = useMyContext();
  const axios = useAxios();
  const getData = () => {
    return axios.get(`/submittedassignment?email=${user.email}`);
  };
  const { data: assignments, isLoading } = useQuery({
    queryKey: ["assignment"],
    queryFn: getData,
  });

  const handleSeeDeails = (id) => {
    console.log(id, "form id");
    axios
      .get(`/submittedassignment/${id}`)
      .then((res) => {
        console.log(res.data);
        setSubmittedData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div>
        {isLoading ? (
          <h2>Loading....</h2>
        ) : (
          <div className="dark:bg-black  px-[5%] lg:px-[10%] bg-gray-200">
            <h2 className="text-3xl md:text-5xl text-purple-600 text-center py-12 font-bold">
              My Assignments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {assignments?.data.map((assignment) => (
                <div key={assignment._id}>
                  <div className="relative flex min-h-[220px] flex-col text-gray-700 bg-white dark:bg-gray-800 shadow-md rounded-md bg-clip-border">
                    <div className="p-6 pb-4 flex-1 felx flex-col h-full">
                      <h5 className="block flex-1 mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-purple-600 dark:text-gray-100">
                        {assignment?.title}
                        {console.log(assignment.getMarks)}
                      </h5>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed dark:text-gray-400">
                        Total marks: {assignment.total_marks}
                      </p>
                      {assignment.getMarks && (
                        <p className="block font-sans text-base antialiased font-light leading-relaxed dark:text-gray-400">
                          Get marks: {assignment.getMarks}
                        </p>
                      )}
                      <p className="block flex-1 font-sans text-base antialiased font-light leading-relaxed dark:text-gray-400">
                        Examinee: {assignment.name}
                      </p>
                    </div>
                    <div className="p-6 pt-0 flex-1 flex items-center justify-between">
                      <button
                        id="give-mark"
                        className=" select-none rounded-lg bg-purple-600 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-6bg-purple-600/20 transition-all hover:shadow-lg hover:shadow-purple-6bg-purple-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        <label htmlFor="my_modal_7">
                          <p
                            onClick={() => handleSeeDeails(assignment._id)}
                            className="py-3 px-4"
                          >
                            See result
                          </p>
                        </label>
                      </button>
                      {/* modal  */}
                      <input
                        type="checkbox"
                        id="my_modal_7"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box py-12 dark:bg-gray-600 flex flex-col">
                          <div >
                          <h2 className="font-bold mb-2 ps-2">Your submission:</h2>
                          <textarea className="w-full p-4 resize-none outline-none overflow-auto bg-gray-200 rounded-xl"  rows={3} defaultValue={submitedData.pdfUrl}></textarea>
                          {submitedData.getMarks && <h2><span className="font-bold">Goted marks:</span> <sapn className="bg-gray-200 p-1">{submitedData.getMarks}</sapn></h2>}
                          {(submitedData.feedback) && <h2 className="mt-2"><span className="font-bold">Examiner&apos;s feedback:</span> <span className="bg-gray-200 p-1">{submitedData.feedback}</span></h2>}
                          {(submitedData.status === "pending") && <button className="mt-2"><span className="font-bold">Status: </span> <span className="bg-gray-200 p-1">{submitedData.status}</span></button>}
                          </div>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">
                          Close
                        </label>
                      </div>
                      {assignment.status !== "completed" && (
                        <p className="block bg-gray-200 dark:bg-gray-600 dark:text-gray-200 p-2 rounded-lg font-sans text-base antialiased font-light leading-relaxed text-inherit">
                          Status: {assignment.status || "pending"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAssignment;
