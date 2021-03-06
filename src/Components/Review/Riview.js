import React from 'react';
import useRiview from '../../Hooks/useRiview';
import AllReview from '../AllReview/AllReview';

const Riview = () => {
    const [reviews, setReviews] = useRiview();
    return (
        <div className='mt-10'>
            <h1 className='text-5xl font-bold'>What Our Customer Say!</h1>
            <div className='my-10 flex flex-col items-center gap-y-6 mt-8'>
           {
               reviews.map(singleReview=><AllReview key={singleReview._id} singleReview={singleReview}></AllReview>)
           }
        </div>
        </div>
    );
};

export default Riview;