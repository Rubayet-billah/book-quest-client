import BookCard from "../Book/BookCard";

const Home = () => {
  const str = "osndogfn";
  const arr = str.split("");
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {arr.map((el) => (
          <BookCard />
        ))}
      </section>
    </div>
  );
};

export default Home;
