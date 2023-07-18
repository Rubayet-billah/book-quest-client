import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilterState {
  searchText: string;
  genreFilter: string | null;
  sortDirection: string;
}

const initialState: IFilterState = {
  searchText: "",
  genreFilter: null,
  sortDirection: "asc",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setGenreFilter: (state, action: PayloadAction<string | null>) => {
      state.genreFilter = action.payload;
    },
    setSortDirection: (state, action: PayloadAction<string>) => {
      state.sortDirection = action.payload;
    },
  },
});

export const { setSearchText, setGenreFilter, setSortDirection } =
  filterSlice.actions;

export default filterSlice.reducer;
