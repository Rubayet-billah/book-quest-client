export interface IReview {
  user: string;
  review: string;
}

export interface IBook {
  title: string;
  author: string;
  price: string;
  genre: string;
  publishYear: string;
  featured: boolean;
  reviews?: IReview[];
}
