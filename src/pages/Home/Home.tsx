import { useGetBooksQuery } from "../../redux/features/book/bookApi";
import { useAppSelector } from "../../redux/hook";
import BookCard from "../Book/BookCard";
import { IBook } from "../Book/interface";
import BookFilter from "./BookFilter";

const Home = () => {
  const { data } = useGetBooksQuery(undefined);
  const { searchText, genreFilter, sortDirection } = useAppSelector(
    (state) => state.filter
  );

  const books = data?.data;

  let content;
  if (books?.length && (searchText || genreFilter || sortDirection)) {
    content = books
      .filter((book: IBook) => {
        if (searchText) {
          const searchRegex = new RegExp(searchText, "i");
          return (
            book.title.match(searchRegex) || book.author.match(searchRegex)
          );
        } else {
          return true;
        }
      })
      .filter((book: IBook) => {
        if (genreFilter) {
          return book.genre === genreFilter;
        } else {
          return true;
        }
      })
      .sort((a: IBook, b: IBook) => {
        if (sortDirection === "asc") {
          return parseInt(a.publishYear) - parseInt(b.publishYear);
        } else if (sortDirection === "desc") {
          return parseInt(b.publishYear) - parseInt(a.publishYear);
        } else {
          return 0;
        }
      })
      .map((book: IBook) => <BookCard key={book._id} book={book} />);
  } else {
    content = books?.map((book: IBook) => (
      <BookCard key={book._id} book={book} />
    ));
  }

  return (
    <div>
      <BookFilter books={books} />
      <h1 className="text-2xl md:text-4xl font-bold">Latest Books</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {content}
      </section>
    </div>
  );
};

export default Home;
