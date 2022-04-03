import React from 'react';
import bike from '../assets/bike.png';

const Home = () => {
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
                    Your constructive feedback is really important to us.This helps us to improve our product quality and better customer policy.Considering your opinion on the products our quality management team continiously working to provide you with better experiencs.As long as your satisfaction become fulfil ,we will continue this bridge of interaction between you and us.
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
            
        </section>
        </div>
    );
};

export default Home;