import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRiview from '../../Hooks/useRiview';
import bike from '../assets/bike.png';
import RiviewInfo from '../RiviewInfo/RiviewInfo';

const Home = () => {
    const [reviews, setReviews] = useRiview();

    const infos = reviews.slice(0, 3);
    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-3 my-10 '>
                <div className='col-span-2 flex flex-col items-start px-8 gap-y-4'>
                    <h1 className='uppercase text-5xl font-bold'>
                        Your criticism
                    </h1>
                    <h1 className='uppercase text-5xl font-bold text-indigo-500'>
                        our improvement
                    </h1>
                    <p className='text-left max-w-2xl'>
                        Your constructive feedback is really important to us.This helps us to improve our product quality and better customer policy.Considering your opinion on the products our quality management team continiously working to provide you with better experiencs.Untill your satisfaction become fulfil ,we will continue this bridge of interaction between you and us.
                    </p>
                    <div>
                        <button className="rounded-lg bg-blue-300 p-3">LIVE DEMO</button>
                    </div>
                </div>
                <div className='col-span-1 mx-10 h-[500px] w-[480px]'>
                    <img src={bike} alt="" />
                </div>
            </section>
            <section>
                <h1 className='text-4xl font-bold'>Customer Review({reviews.length})</h1>
                <div className='flex flex-col items-center gap-y-6 mt-8'>
                    {
                        infos.map(info => <RiviewInfo key={info._id} info={info}></RiviewInfo>)
                    }

                </div>

                <div className='my-14'>
                    <Link to='/reviews' className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0 rounded-sm'>See All Reviews</Link>
                </div>

            </section>
        </div>
    );
};

export default Home;