import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  setGenreFilter,
  setSearchText,
  setSortDirection,
} from "../../redux/features/filter/filterSlice";
import { IBook } from "../Book/interface";

const BookFilter: React.FC<any> = ({ books }) => {
  const dispatch = useAppDispatch();
  const { searchText, genreFilter, sortDirection } = useAppSelector(
    (state) => state.filter
  );

  // Selecting unique genres from the books array
  const genreList: string[] = [
    ...new Set((books as IBook[])?.map((book) => book?.genre)),
  ];

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleGenreFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value === "" ? null : e.target.value;
    dispatch(setGenreFilter(genre));
  };

  const handleSortDirectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const direction = e.target.value as string;
    dispatch(setSortDirection(direction));
  };

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="Search by title or author"
          className="border border-gray-300 rounded px-4 py-2 w-64"
        />
        <select
          value={genreFilter || ""}
          onChange={handleGenreFilterChange}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">All Genres</option>
          {genreList.map((genre: string) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <select
          value={sortDirection}
          onChange={handleSortDirectionChange}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="asc">Oldest</option>
          <option value="desc">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default BookFilter;
