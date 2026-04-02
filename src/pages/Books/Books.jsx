import React, { useEffect } from 'react';

const Books = () => {
    const [allBooks, setAllBooks]= React.useState([]);
    useEffect(()=>{
        fetch('../../../public/booksData.json')
        .then(res=>res.json())
        .then (data=>{
            setAllBooks(data);
        })
    },[])
    return (
        <div>
            <h1>hello ami books</h1>
        </div>
    );
};

export default Books;