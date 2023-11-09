import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
    // https://dist-e3mqi1blo-md-anarul-islams-projects.vercel.app/
    // http://localhost:5000/api/v1/submittedassignment
  });

const useAxios = () => {
    return instance
};

export default useAxios;