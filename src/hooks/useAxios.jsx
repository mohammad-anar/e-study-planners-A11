import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dist-three-blue.vercel.app/api/v1',
    withCredentials: true
    // https://dist-e3mqi1blo-md-anarul-islams-projects.vercel.app/
    // https://dist-three-blue.vercel.app/api/v1/submittedassignment
  });

const useAxios = () => {
    return instance
};

export default useAxios;