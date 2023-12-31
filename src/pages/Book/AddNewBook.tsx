import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useAddBookMutation } from "../../redux/features/book/bookApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddNewBook = () => {
  const [addBook, { data, isLoading, isError, isSuccess }] =
    useAddBookMutation();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    genre: "",
    publishYear: "",
    featured: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setBook((prevState) => ({ ...prevState, [name]: inputValue }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ ...book, authorEmail: user?.email });
    addBook({ ...book, authorEmail: user?.email });
  };

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong");
    }
    if (isSuccess && data) {
      const { message } = data;
      toast.success(message);
      navigate("/");
      // dispatch(setLoading(isLoading));
    }
  }, [data, isLoading, isError, isSuccess, navigate, dispatch]);

  return (
    <form
      className="flex max-w-md md:w-96 flex-col gap-4 mx-auto md:mt-12"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl md:text-4xl text-center font-bold">Add Book</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title" />
        </div>
        <TextInput
          id="title"
          placeholder="Enter title"
          required
          type="text"
          name="title"
          value={book.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="author" value="Author" />
        </div>
        <TextInput
          id="author"
          placeholder="Enter author"
          required
          type="text"
          name="author"
          value={book.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Price" />
        </div>
        <TextInput
          id="price"
          placeholder="$USD"
          required
          type="text"
          name="price"
          value={book.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="genre" value="Genre" />
        </div>
        <TextInput
          id="genre"
          placeholder="Enter genre"
          required
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="publishYear" value="Publish Year" />
        </div>
        <TextInput
          id="publishYear"
          placeholder="Enter publish year"
          required
          type="text"
          name="publishYear"
          value={book.publishYear}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="featured"
          name="featured"
          checked={book.featured}
          onChange={handleInputChange}
        />
        <Label htmlFor="featured">Featured</Label>
      </div>
      <Button color="purple" type="submit">
        Add Book
      </Button>
    </form>
  );
};

export default AddNewBook;
