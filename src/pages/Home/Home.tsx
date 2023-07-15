import { useGetBooksQuery } from "../../redux/features/book/bookApi";
import BookCard from "../Book/BookCard";
import { IBook } from "../Book/interface";

const Home = () => {
  const { data: books, isError } = useGetBooksQuery(undefined);

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold">Latest Books</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {books?.data?.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </section>
    </div>
  );
};

export default Home;
