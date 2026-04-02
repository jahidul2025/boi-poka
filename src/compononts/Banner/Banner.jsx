import React from 'react';
import bookimage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='flex justify-around items-center h-[500px] bg-[#fff1db] rounded-2xl mt-8'>
            <div>
                <h1 className='font-bold text-5xl text-black '>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-primary mt-5 font-bold'>View The List</button>
            </div>
            <div className='w-[318px]'>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;