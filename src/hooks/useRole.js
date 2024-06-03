import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "../../src/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const {user, loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();


    const {data:role = '', isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async() =>{
            const { data } = await axiosPublic.get(`/user/${user?.email}`)
            return data.role
        }
    })
    
        //Fetch user info 

        return [role, isLoading]
    
};

export default useRole;

// const [role] = useRole()