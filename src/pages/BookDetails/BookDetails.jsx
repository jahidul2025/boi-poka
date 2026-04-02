import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, image, author, category} = singleBook;
    console.log(singleBook);
    return (
        <div className=' mx-auto flex items-center justify-around mt-10 p-6 h-[711px] gap-[48px] bg-white '>
            <div className=' bg-[#fff1db] rounded-2xl shadow-lg'>
                <img className='h-[573px] p-[64px]' src={image} alt={bookName} />
            </div>
            <div className='flex flex-col justify-start'>
                <h5 className='font-bold text-4xl text-black'>{bookName}</h5>
                <p className='text-lg text-gray-700'>By: {author}</p>
                <p className='text-lg text-gray-700 my-[40px]'>Category: {category}</p>
                {/* <p className='text-small text-gray-700 m-w-[549px] '>Review: {review}</p> */}
                <div className='flex gap-4'>
                    <button className="btn btn-neutral btn-outline">Mark as Read</button>
                    <button className="btn btn-active btn-info text-white">Add to WishList</button>
                </div>

            </div>


        </div>
    );
};

export default BookDetails;