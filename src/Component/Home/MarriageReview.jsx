import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import ReviewCard from "./ReviewCard";

const MarriageReview = () => {
    const axiosSecure = useAxiosPublic();
    const { data } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/marriage');
            // Sort the data array in descending order based on the date
            return data.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    });

    return (
       <div className='mt-16'>
         <h2 className='text-4xl font-bold mb-4 text-center text-red-600 font-serif'>Our Success Stories</h2>
         <p className="text-center">At Love Line, we cherish the beautiful journeys of love we've nurtured. Discover how we've helped <br /> countless couples find their perfect match and start their happily ever after</p>
        <div className='flex p-10'>
            <div className='grid lg:grid-cols-3 gap-4'>
                {data && data.map(review => (
                    <ReviewCard key={review._id} review={review} />
                ))}
            </div>
        </div>
       </div>
    );
};

export default MarriageReview;
