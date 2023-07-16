import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { IBook } from "./interface";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../redux/features/book/bookApi";
import Loading from "../shared/Loading/Loading";

const EditBook = () => {
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useGetBookQuery(id as string);

  const [editedBook, setEditedBook] = useState<IBook>(data?.data);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setEditedBook((prevState) => ({ ...prevState, [name]: inputValue }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(editedBook);
  };

  useEffect(() => {
    setEditedBook(data?.data);
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <form
        className="flex max-w-md md:w-96 flex-col gap-4 mx-auto md:mt-12"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl md:text-4xl text-center font-bold">
          Edit Book
        </h1>
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
            value={editedBook?.title}
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
            value={editedBook?.author}
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
            value={editedBook?.price}
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
            value={editedBook?.genre}
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
            value={editedBook?.publishYear}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="featured"
            name="featured"
            checked={editedBook?.featured}
            onChange={handleInputChange}
          />
          <Label htmlFor="featured">Featured</Label>
        </div>
        <Button color="purple" type="submit">
          Save Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
