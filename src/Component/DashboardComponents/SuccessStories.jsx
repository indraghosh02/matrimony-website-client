import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import SuccessStoryRow from "./SuccessStoryRow"

const SuccessStories = () => {
  const axiosSecure = useAxiosPublic()
  const { data: stories = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['marriageStories'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/marriage')
      return data
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading stories</div>
  }

  return (
    <div className='mt-16'>
      <h2 className='text-4xl font-bold mb-4 text-center text-red-600 font-serif'>Our Success Stories</h2>
      <p className="text-center">At Love Line, we cherish the beautiful journeys of love we've nurtured. Discover how we've helped countless couples find their perfect match and start their happily ever after.</p>
      
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead className="">
                  <tr>
                    <th className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'>
                      Male Biodata ID
                    </th>
                    <th className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'>
                      Female Biodata ID
                    </th>
                    <th className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'>
                      Button
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stories.map(story => (
                    <SuccessStoryRow key={story._id} story={story} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
