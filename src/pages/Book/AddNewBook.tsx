import React, { useState, ChangeEvent, FormEvent } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

const AddNewBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    genre: "",
    publishYear: 0,
    featured: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setBook((prevState) => ({ ...prevState, [name]: inputValue }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(book);
    // Handle book submission logic here
  };

  return (
    <form
      className="flex max-w-md md:w-96 flex-col gap-4 mx-auto md:mt-36"
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
          placeholder="Enter price"
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
          type="number"
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
      <Button type="submit">Add Book</Button>
    </form>
  );
};

export default AddNewBook;
