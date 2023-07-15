import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { _id, title, author, price, genre, publishYear, featured } = book;
  return (
    <div>
      <Card className="max-w-sm relative">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Author:</strong> {author}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Price:</strong> {price}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Genre:</strong> {genre}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Publish Year:</strong> {publishYear}
        </p>
        {featured && (
          <p className="absolute top-7 right-3 bg-violet-400 px-2 py-1 rounded text-white text-sm">
            <strong>Featured</strong>
          </p>
        )}
        <Link to={`/book/${5246513216}`}>
          <Button color="purple" className="w-full">
            <p>Book Details</p>
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default BookCard;
