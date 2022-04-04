import React from 'react';
import BarGraph from '../Graph/BarGraph';
import LilneGraph from '../Graph/LilneGraph';

const DashBoard = () => {

    return (
        <div>
            <h1 className='text-4xl text-blue-800 font-bold my-10'>This is Our Statistics</h1>
            <div className='mt-10 flex justify-around'>
            <div>
                <LilneGraph></LilneGraph>

            </div>
            <div>
                <BarGraph></BarGraph>
            </div>
            </div>
        </div>
    );
};

export default DashBoard;