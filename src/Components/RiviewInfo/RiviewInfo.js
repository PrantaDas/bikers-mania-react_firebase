import React from 'react';

const RiviewInfo = (props) => {
    const { picture, review, name, rating } = props.info;
    return (
        <div className='flex p-3 h-52 w-[500px] shadow-lg rounded-lg ' >
            <div className='h-20 w-20 flex items-center'>
                <div>
                    <img className='rounded-full' src={picture} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-start text-left ml-5'>
                <p className='p-1'><span className='font-bold text-sky-500'>Rating:</span>{name}</p>
                <p className='p-1'><span className='font-bold text-sky-500'>Rating:</span>{review}</p>
                <p className='p-1'><span className='font-bold text-sky-500'>Rating:</span>{rating}<i className="fa-solid fa-star"></i></p>
            </div>
        </div>
    );
};

export default RiviewInfo;