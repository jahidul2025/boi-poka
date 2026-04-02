import { FaStarHalfStroke } from "react-icons/fa6";
import { SiPanasonic } from "react-icons/si";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
    // console.log(singleBook);
    const { bookName, image, bookId,rating, category, tags, yearOfPublishing, publisher } = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-6 ">
                <figure className="p-4 mt-4 bg-gray-100 w-2/3 mx-auto rounded-2xl">
                    <img className="p-4  h-41"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="flex p-2 items-center justify-center">
                    {
                        tags.map(tag => <span key={tag} className="badge badge-outline mr-2">{tag}</span>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by : {publisher}</p>
                    <div className="border-2 border-dashed"></div>
                    <div className="card-actions justify-around">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfStroke /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;