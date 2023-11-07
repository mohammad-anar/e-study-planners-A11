import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
    // http://localhost:5000/api/v1/submittedassignment
  });

const useAxios = () => {
    return instance
};

export default useAxios;