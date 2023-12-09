
import PropTypes from "prop-types";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
const AssignmentsCard = ({ assignment , mutate}) => {
  const {user} = useMyContext();
  // const axios = useAxios();
  
  const navigate = useNavigate();
  const { _id, title, image, total_marks, difficulty_level, email } = assignment;

  // const handleDelete = () => {
  //   axios.delete(`/assignments/${_id}`)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err.message))
  // }
  return (
    <div data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="600"  className="relative flex w-full flex-col  md:flex-row rounded-md dark:border dark:border-amber-200 bg-white dark:bg-gray-900 dark:bg-opacity-20 text-gray-700 dark:text-white shadow-md">
      <div className="relative rounded-md w-full md:w-2/5 m-0 overflow-hidden mx-auto md:mx-0 text-gray-700 bg-white dark:bg-black dark:bg-opacity-20 shrink-0 bg-clip-border">
        <div className="flex h-full items-center p-6">
          <img
            src={image}
            alt="image"
            className="object-cover rounded-xl w-full h-full"
          />
        </div>
      </div>
      <div className="p-6 w-full">
        <h4 className=" mb-2 font-sans text-lg flex flex-col gap-1 justify-between items-start antialiased font-semibold leading-snug tracking-normal text-amber-900">
          <span>{title}</span>
          <span className="text-sm text-black dark:text-white flex items-center w-[120px]">
            Marks: {total_marks}
          </span>
        </h4>
        <p className="block mb-4 font-sans text-sm antialiased font-normal leading-relaxed text-gray-700">
          <span className="font-bold">Difficulty-level: </span>
          {difficulty_level}
        </p>
        <div className="flex flex-col w-full gap-2">
          <button
            onClick={() => navigate(`/assignments/${_id}`)}
            className="btn btn-sm border-none outline-none w-full  bg-gray-800 text-white "
          >
            View Assignment
            <span>
              <FaLongArrowAltRight></FaLongArrowAltRight>
            </span>
          </button>
          <div className="flex items-center text-xs justify-between gap-2">
            <button
              onClick={() => navigate(`/updateassignment/${_id}`)}
              className="btn flex-1 capitalize btn-sm border-none outline-none   bg-gray-800  text-white "
            >
              Update
              <span>
                <FaLongArrowAltRight></FaLongArrowAltRight>
              </span>
            </button>
            {user?.email === email && <button onClick={() => mutate(_id)}
              className="btn flex-1 capitalize btn-sm border-none outline-none   bg-gray-800 text-white "
            >
              Delete
              <span>
                <FaLongArrowAltRight></FaLongArrowAltRight>
              </span>
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
};
AssignmentsCard.propTypes = {
  assignment: PropTypes.object,
  mutate: PropTypes.func,
};

export default AssignmentsCard;
