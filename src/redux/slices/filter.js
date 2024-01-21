import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    topRated: false,
    mostPopular: false,
    language: "",
    city: false,
    budget: "",
  },
  reducers: {
    addFilter: (state, action) => {
      const { topRated, mostPopular, language, city, budget } = action.payload;
      state.topRated = topRated;
      state.mostPopular = mostPopular;
      state.language = language;
      state.city = city;
      state.budget = budget;
    },
    clearFilter: (state) => {
      state.topRated = false;
      state.mostPopular = false;
      state.language = "";
      state.city = false;
      state.budget = "";
    },
  },
});
const { reducer, actions } = filterSlice;
export const { addFilter, clearFilter } = actions;
export default reducer;
