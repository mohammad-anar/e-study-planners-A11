import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dist-three-blue.vercel.app/api/v1',
    withCredentials: true
    // https://dist-e3mqi1blo-md-anarul-islams-projects.vercel.app/
    // https://dist-3d3wdamoq-md-anarul-islams-projects.vercel.app/
    // http://localhost:5000/api/v1/submittedassignment
    // https://dist-three-blue.vercel.app/
  });

const useAxios = () => {
    return instance
};

export default useAxios;