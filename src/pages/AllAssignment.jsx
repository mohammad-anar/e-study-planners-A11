import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AssignmentsCard from "../components/AssignmentsCard";

const AllAssignment = () => {
    const getData = () => {
        const res = axios.get("http://localhost:5000/api/v1/assignments");
        return res
    }
  const { data: assignments, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getData,
  });
  return (
    <div>
        <h1 className="text-3xl bg-gray-200 dark:bg-black md:text-5xl text-purple-600 font-bold text-center py-12 "> All Assignments</h1>
        <div className="grid bg-gray-200 dark:bg-black grid-cols-1 gap-x-8 lg:grid-cols-2 gap-5 px-[5%] md:px-[10%]">
      {
       isLoading? <div className="flex h-screen items-center justify-center col-span-2"><span className="loading loading-spinner text-neutral "></span></div> : assignments?.data?.map(assignment => <AssignmentsCard key={assignment._id} assignment={assignment}></AssignmentsCard>)
      }
    </div>
    </div>
  );
};

export default AllAssignment;
