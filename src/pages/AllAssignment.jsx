import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AssignmentsCard from "../components/AssignmentsCard";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const AllAssignment = () => {
    const axios = useAxios();
    const queryClient = useQueryClient();
    const getData = () => {
        const res = axios.get("https://dist-three-blue.vercel.app/api/v1/assignments");
        return res
    }
  const { data: assignments, isLoading } = useQuery({
    queryKey: [ "assignments"],
    queryFn: getData,
  });
  const {mutate} = useMutation({
    mutationKey: ["assignments"],
    mutationFn: (id) => {
        console.log(id);
        return axios.delete(`/assignments/${id}`)
    },
    onSuccess: () => {
        toast.success("deled successfully");
        queryClient.invalidateQueries({queryKey: ["assignments"]})
    }
  })
  return (
    <div>
        <h1 className="text-3xl bg-gray-200 dark:bg-black md:text-5xl text-purple-600 font-bold text-center py-12 "> All Assignments</h1>
        <div className="grid bg-gray-200 dark:bg-black grid-cols-1 gap-x-8 lg:grid-cols-2 gap-5 px-[5%] md:px-[10%]">
      {
       isLoading? <div className="flex h-screen items-center justify-center col-span-2"><span className="loading loading-spinner text-neutral "></span></div> : assignments?.data?.map(assignment => <AssignmentsCard key={assignment._id} assignment={assignment} mutate={mutate}></AssignmentsCard>)
      }
    </div>
    </div>
  );
};

export default AllAssignment;
