import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AssignmentsCard from "../components/AssignmentsCard";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useMyContext from "../hooks/useMyContext";

const AllAssignment = () => {
  const { user } = useMyContext();
  const [size, setSize] = useState(0);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("All")

  // no needable
  !limit && setLimit(10);

  const axios = useAxios();
  const queryClient = useQueryClient();
  const getData = () => {
    const res = axios.get(
      `https://dist-three-blue.vercel.app/api/v1/assignments?page=${size}&size=${limit}&filter=${filter}`
    );
    
    return res;
  };
  const { data: assignments, isLoading } = useQuery({
    queryKey: ["assignments", size, limit, filter],
    queryFn: getData,
  });
  const { mutate } = useMutation({
    mutationKey: ["assignments"],
    mutationFn: (id) => {
      console.log(id);
      return axios.delete(`/assignments/${id}?email=${user.email}`);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["assignments"] });
      if (data.data.deletedCount === 1) {
        return toast.success("delete successfully");
      }
      toast.error("can't delete other's assignment");
    },
  });
  const count = assignments?.data?.count || 10;
  const page = Math.ceil(count / 10);
  const docCount = [...Array(page).keys()];
  console.log(size, limit);
  const handlefilter = (e) => {
    setFilter(e.target.value)
  }
  console.log({assignments});
  return (
    <div>
      <Helmet>
        <title>eStudyPartners-all_assignment</title>
      </Helmet>
      <h1 className="text-3xl bg-gray-200 flex gap-2 flex-wrap justify-center dark:bg-black md:text-5xl text-amber-900 font-bold text-center py-12 ">
        <p
          data-aos="flip-right"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          All Assignments
        </p>
        <select onChange={handlefilter} className="select select-bordered max-w-xs">
          <option selected>
            All
          </option>
          <option >
            Eassy
          </option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </h1>
      <div className="grid bg-gray-200 dark:bg-black grid-cols-1 gap-x-8 lg:grid-cols-2 gap-5 px-[5%] md:px-[10%]">
        {isLoading ? (
          <div className="flex h-screen items-center justify-center col-span-2">
            <span className="loading loading-spinner text-neutral "></span>
          </div>
        ) : (
          assignments?.data.result?.map((assignment) => (
            <AssignmentsCard
              key={assignment._id}
              assignment={assignment}
              mutate={mutate}
            ></AssignmentsCard>
          ))
        )}
      </div>
      <div className="flex items-center justify-center py-6">
        <button
          className="btn btn-outline capitalize"
          onClick={() => {
            if (size > 0) {
              setSize(size - 1);
            }
          }}
        >
          Prev
        </button>
        <div className="join">
          {docCount.map((item, indx) => (
            <button
              key={indx}
              onClick={() => {
                setSize(indx);
              }}
              className={`join-item text-amber-900 btn ${
                indx === size && "bg-amber-900 text-white"
              }`}
            >
              {indx + 1}
            </button>
          ))}
        </div>
        <button
          className="btn btn-outline capitalize"
          onClick={() => {
            if (size >= 0 && size < page - 1) {
              setSize(size + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllAssignment;
