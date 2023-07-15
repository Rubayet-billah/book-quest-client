import React from "react";
import { Card, Button, Label, TextInput, Textarea } from "flowbite-react";

const BookDetails: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-3xl p-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Book Title</h1>
          <p className="text-gray-600">Author Name</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper mi ut aliquam facilisis. Quisque vestibulum risus sed
            fermentum cursus.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Reviews</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Review 1</li>
            <li>Review 2</li>
            <li>Review 3</li>
            <li>Review 4</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Leave a Review</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" value="Your Name" />
              <TextInput id="name" placeholder="John Doe" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="rating" value="Rating" />
              <TextInput id="rating" placeholder="5" required type="number" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="comment" value="Comment" />
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
