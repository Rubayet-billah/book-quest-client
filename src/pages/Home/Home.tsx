import BookCard from "../Book/BookCard";

const Home = () => {
  const str = "osndogfn";
  const arr = str.split("");
  const bookObj = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$12.99",
    genre: "Fiction",
    publishYear: 1925,
    featured: true,
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold">Latest Books</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {arr.map((el, idx) => (
          <BookCard key={idx} book={bookObj} />
        ))}
      </section>
    </div>
  );
};

export default Home;
