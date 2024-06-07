import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://matrimony-server-sable.vercel.app'
})
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;