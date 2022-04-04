import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-5xl font-bold text-gray-500'>Frequently Asked Question</h1>
            <div className='px-5 py-5 shadow-lg rounded-md mt-10'>
                <p className='py-5 font-bold'>Whta is context API?</p>
                <p>In a typical application any kind of data is passed to its parent to children componenet via prop drilling.Before introduction of context APi we needed to pass data one after another by maintainung the tree.But the context API make the way easier to share data among the componnents solving the prblem of prop drilling.Using context API we don't need anymore to pass data component to component for using it.</p>
            </div>
            <div className='px-5 py-5 shadow-lg rounded-md mt-10'>
                <p className='py-5 font-bold'>
                    What is inline,block and inline-bliock element?
                </p>
                <p>
                    Generally an inline element doesn't start with a new line.It always takes as much space as it needed.
                    But the block element always starts with a new line.The brower defines some spacing automatically to the block element.By defaul it takes the full width avaiable.Compared to inline element the inline-block element allows to add some space such as heigh/width,margin/padding.But the major difference is that the inline-block element doesn't start with a newline,that allows the element can place next to other element.
                </p>
            </div>
        </div>
    );
};

export default Blog;