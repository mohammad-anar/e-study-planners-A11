import PropTypes from "prop-types";
import { FaLongArrowAltRight } from "react-icons/fa";
const AssignmentsCard = ({ assignment }) => {
  const {
    _id,
    title,
    image,
    description,
    total_marks,
    difficulty_level,
    due_date,
  } = assignment;
  return (
    <div className="relative flex w-full flex-col  md:flex-row rounded-md dark:border dark:border-purple-400 bg-white dark:bg-gray-900 dark:bg-opacity-20 text-gray-700 dark:text-white shadow-md">
      <div className="relative rounded-md w-full md:w-2/5 m-0 overflow-hidden mx-auto md:mx-0 text-gray-700 bg-white dark:bg-black dark:bg-opacity-20 shrink-0 bg-clip-border">
        <div className="flex h-full items-center p-6">
        <img
          src={assignment?.image}
          alt="image"
          className="object-cover rounded-xl w-full h-full"
        />
        </div>
      </div>
      <div className="p-6">
        <h4 className=" mb-2 font-sans text-lg flex flex-col gap-1 justify-between items-start antialiased font-semibold leading-snug tracking-normal text-purple-600">
          <span>{assignment.title}</span> <span className="text-sm text-black dark:text-white flex items-center w-[120px]">Marks: {total_marks}</span>
        </h4>
        <p className="block mb-4 font-sans text-sm antialiased font-normal leading-relaxed text-gray-700">
        <span className="font-bold">Difficulty-level: </span>{difficulty_level}
        </p>
        <div className="flex flex-col gap-2">
          <button className="btn btn-sm border-none outline-none w-full rounded-none bg-purple-600 text-white ">
            View Assignment <span><FaLongArrowAltRight></FaLongArrowAltRight></span>
          </button>
          <button className="btn btn-sm border-none outline-none w-full rounded-none bg-purple-600 text-white ">
            Update Assignment <span><FaLongArrowAltRight></FaLongArrowAltRight></span>
          </button>
        </div>
      </div>
    </div>
  );
};
AssignmentsCard.propTypes = {
  assignment: PropTypes.object,
};

export default AssignmentsCard;
