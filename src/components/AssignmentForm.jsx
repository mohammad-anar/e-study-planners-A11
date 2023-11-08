import PropTypes from "prop-types";
import useMyContext from "../hooks/useMyContext";

import { useState } from "react";
import DatePicker from "react-datepicker";

const AssignmentForm = ({ title, btnName, handleCreate }) => {
  const { user } = useMyContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const mark = form.mark.value;
    const difficulity = form.difficulity.value;
    const date = form.date.value;
    const description = form.description.value;
    const assignment = {
      title,
      image,
      description,
      total_marks: mark,
      difficulty_level: difficulity,
      due_date: date,
      email: user?.email,
    };
    console.log(assignment);
    handleCreate(assignment);
  };

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="relative flex flex-col bg-gray-200 dark:bg-gray-900 min-h-screen bg-clip-border  shadow-none">
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 max-w-screen-lg px-16   mx-auto py-20 dark:bg-black bg-white rounded-lg"
      >
        <div className="mb-4 flex flex-col gap-6">
          <h2
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="text-2xl md:text-5xl  text-gray-900 font-bold pb-6 text-center "
          >
            {title}
          </h2>
          {/* input 1  */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="relative h-11  w-[300px] md:w-[500px] lg:w-[700px]"
          >
            <input
              name="title"
              type="text"
              className="peer h-full w-full dark:text-white rounded-md border border-gray-900 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-900 placeholder-shown:border-t-gray-900border-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              required
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-purple-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-66border-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-purple-500">
              Assignment Name
            </label>
          </div>
          {/* input 2  */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="600"
            className="relative h-11  w-[300px] md:w-[500px] lg:w-[700px]"
          >
            <input
              name="image"
              type="url"
              className="peer h-full w-full dark:text-white rounded-md border border-gray-900 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-900 placeholder-shown:border-t-gray-900border-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              required
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-purple-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-66border-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-purple-500">
              ImageURL
            </label>
          </div>
          {/* input 3  */}
          <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="600"  className="relative h-11  w-[300px] md:w-[500px] lg:w-[700px]">
            <input
              name="mark"
              type="number"
              className="peer h-full w-full dark:text-white rounded-md border border-gray-900 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-900 placeholder-shown:border-t-gray-900border-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              required
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-purple-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-66border-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-purple-500">
              Total Marks
            </label>
          </div>
          {/* input 4  */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="relative h-11  w-[300px] md:w-[500px] lg:w-[700px]"
          >
            <div className="border-b-gray-900 border dark:border-none dark:border flex  p-3 rounded-xl border-r-gray-900 border-l-gray-900">
              <select name="difficulty" id="difficulty">
                <option value="essay">Essay</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-purple-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-purple-500">
              Difficulity level
            </label>
          </div>
          {/* input 5  */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="relative h-11 dark:bordert-none w-[300px] md:w-[500px] lg:w-[700px]"
          >
            <div className="border-b-gray-900 border dark:border-none dark:border flex  p-3 rounded-xl border-r-gray-900 border-l-gray-900">
              <DatePicker
                name="date"
                className="outline-none flex-1 bg-transparent dark:text-gray-200"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-purple-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-purple-500">
                Select date
              </label>
            </div>
          </div>
          {/* input 6  */}
          <textarea data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800" 
            placeholder="Enter descrioption"
            className="p-4  outline-none border bg-transparent placeholder:text-base-content dark:text-white border-gray-900 rounded-lg resize-none"
            name="description"
            id="description"
            rows="5"
          ></textarea>
        </div>
        <button data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800" 
          type="submit"
          className="mt-6 block w-full select-none rounded-lg bg-amber-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          {btnName}
        </button>
      </form>
    </div>
  );
};
AssignmentForm.propTypes = {
  title: PropTypes.string,
  btnName: PropTypes.string,
  handleCreate: PropTypes.func,
};

export default AssignmentForm;
