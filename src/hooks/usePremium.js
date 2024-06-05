import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const usePremium = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
  
    const { data: userData, isLoading } = useQuery({
        queryKey: ['user', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/user/${user?.email}`);
            return data;
        }
    });
    
    const isPremium = userData?.isPremium;

    return [isPremium, isLoading];
};

export default usePremium;


// export default usePremium;





// import useAxiosPublic from "../../src/hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import { AuthContext } from '../providers/AuthProvider';

// const useRole = () => {
//     const {user, loading } = useContext(AuthContext)
//     const axiosPublic = useAxiosPublic();


//     const {data:role = '', isLoading } = useQuery({
//         queryKey: ['role', user?.email],
//         enabled: !loading && !!user?.email,
//         queryFn: async() =>{
//             const { data } = await axiosPublic.get(`/user/${user?.email}`)
//             return data.role
//         }
//     })
    
//         //Fetch user info 

//         return [role, isLoading]
    
// };

// export default useRole;

// // const [role] = useRole()