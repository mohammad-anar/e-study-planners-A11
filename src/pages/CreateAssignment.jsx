

import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import AssignmentForm from "../components/AssignmentForm";
import toast from "react-hot-toast";


const CreateAssignment = () => {

    const handleCreate = (data) => {
        const assignment = {...data}
        axios.post("https://dist-three-blue.vercel.app/api/v1/assignments",assignment)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                toast.success("Assignment created")
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
  return (
    <>
        <AssignmentForm 
        title={"Create an Assgnment"}
         btnName={"Create"}
        handleCreate={handleCreate}
         ></AssignmentForm>
    </>
  )
};


export default CreateAssignment;
