import { useNavigate, useParams } from "react-router-dom";
import { Card, Button, Textarea } from "flowbite-react";
import {
  useDeleteBookMutation,
  useGetBookQuery,
} from "../../redux/features/book/bookApi";
import Loading from "../shared/Loading/Loading";
import { IBook, IReview } from "./interface";
import { useAppSelector } from "../../redux/hook";
import { toast } from "react-toastify";
import { useEffect } from "react";

const BookDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookQuery(id as string);
  const [deleteBook, { isError, isSuccess }] = useDeleteBookMutation();
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  console.log(id, data);

  const handleEditClick = (authorEmail: string) => {
    if (user?.email !== authorEmail) {
      toast.error("Unathorized author");
    } else {
      navigate(`/edit/${_id}`);
    }
  };

  const handleDeleteClick = (id: string) => {
    if (user?.email !== authorEmail) {
      toast.error("Unathorized author");
    } else if (user?.email === authorEmail) {
      deleteBook(id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book deleted successfully");
      navigate("/");
    } else if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError, navigate]);

  if (isLoading) {
    return <Loading />;
  }
  const {
    _id,
    title,
    author,
    authorEmail,
    price,
    genre,
    publishYear,
    featured,
    reviews,
  } = data?.data as IBook;

  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-3xl p-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-600">{author}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="text-gray-600">
            Immerse yourself in the captivating world of literature with this
            extraordinary collection of books. From heartwarming tales of love
            and friendship to thrilling adventures filled with mystery and
            suspense, this diverse selection has something for every reader.
          </p>
          <p className="text-gray-600"></p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Book Details</h2>
          <p className="text-gray-600">
            <strong>Genre:</strong> {genre}
          </p>
          <p className="text-gray-600">
            <strong>Publication Year:</strong> {publishYear}
          </p>
          <p className="text-gray-600">
            <strong>Price:</strong> {price}
          </p>
          <p className="text-gray-600">
            <strong>Featured:</strong> {featured ? "Yes" : "No"}
          </p>
        </div>

        <div className="flex justify-between">
          <Button color="purple" onClick={() => handleEditClick(authorEmail)}>
            Edit Book
          </Button>
          <Button color="red" onClick={() => handleDeleteClick(_id as string)}>
            Delete Book
          </Button>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Reviews</h2>
          <div className="space-y-4">
            {reviews?.map((review: IReview, index: number) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="ml-3">
                  <h3 className="text-gray-800 font-bold">{review.user}</h3>
                  <p className="text-gray-600">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Leave a Review</h2>
          <form className="flex flex-col gap-4">
            {/* <div className="flex flex-col gap-2">
              <Label htmlFor="name" value="Your Name" />
              <TextInput id="name" placeholder="John Doe" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="rating" value="Rating" />
              <TextInput id="rating" placeholder="5" required type="number" />
            </div> */}
            <div className="flex flex-col gap-2">
              {/* <Label htmlFor="comment" value="Comment" /> */}
              <Textarea id="comment" placeholder="Write your review" required />
            </div>
            <Button color="purple" type="submit">
              Submit Review
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default BookDetails;
