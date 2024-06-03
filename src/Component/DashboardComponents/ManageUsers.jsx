
import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import { useQuery } from "@tanstack/react-query"
import UserDataRow from "./UserDataRow"

const ManageUsers = () => {
  const { user } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const [searchQuery, setSearchQuery] = useState('')

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users', searchQuery],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/users/search`, { params: { name: searchQuery } })
      return data
    },
  })

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    refetch()
  }

  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='mb-4'>
            <h2 className="text-lg text-blue-600 font:bold">Search Name</h2>
            <input
              type='text'
              placeholder='Search by name...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead className="">
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                    >
                      Make Admin
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                    >
                      Make Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (<UserDataRow key={user?._id} user={user} refetch={refetch} />))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageUsers



















// import { useContext } from "react"
// import { AuthContext } from "../../providers/AuthProvider"
// import useAxiosPublic from "../../hooks/useAxiosPublic"
// import { useQuery } from "@tanstack/react-query"
// import UserDataRow from "./UserDataRow"




// const ManageUsers = () => {
//     const { user } = useContext(AuthContext)
//     const axiosPublic = useAxiosPublic()
//     const {
//         data: users = [],
//         isLoading,
//         refetch,
//      } = useQuery( {
//             queryKey: ['users'],
//             queryFn: async () => {
//                 const { data } = await axiosPublic.get(`/users`)
//                 return data
//             },
//          })
    
//     console.log(users);
//   return (
//     <>
//       <div className='container mx-auto px-4 sm:px-8'>
   
//         <div className='py-8'>
//           <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
//             <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
//               <table className='min-w-full leading-normal'>
//                 <thead className="">
//                   <tr>
//                   <th
//                       scope='col'
//                       className='px-5 py-3 bg-blue-600  text-white border-b border-gray-200  text-left text-sm uppercase font-bold'
//                     >
//                       Name
//                     </th>
//                     <th
//                       scope='col'
//                       className='px-5 py-3 bg-blue-600  text-white border-b border-gray-200  text-left text-sm uppercase font-bold'
//                     >
//                       Email
//                     </th>
//                     <th
//                       scope='col'
//                       className='px-5 py-3 bg-blue-600  text-white  border-b border-gray-200  text-left text-sm uppercase font-bold'
//                     >
//                       Role
//                     </th>
//                     <th
//                       scope='col'
//                       className='px-5 py-3 bg-blue-600  text-white border-b border-gray-200  text-left text-sm uppercase font-bold'
//                     >
//                       Make Admin
//                     </th>

//                     <th
//                       scope='col'
//                       className='px-5 py-3 bg-blue-600  text-white  border-b border-gray-200   text-left text-sm uppercase font-bold'
//                     >
//                   Make Premium
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 { 
//                     users.map(user =>(<UserDataRow key={user?._id} user={user} refetch={refetch}/>))
//                 }



//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ManageUsers