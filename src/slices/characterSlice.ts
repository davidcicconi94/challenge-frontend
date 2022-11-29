import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Error } from "../interface/interfaces";
import { CharacterState } from "../interface/interfaces";

const initialState: CharacterState = {
  value: [
    {
      name: "",
      gender: "",
      birth_year: "",
      edited: "",
      eye_color: "",
      films: [""],
      hair_color: "",
      homeworld: "",
      height: "",
      mass: "",
      starships: [""],
      vehicles: [""],
      skin_color: "",
      species: "",
      created: "",
      url: "",
    },
  ],
  status: "",
  loading: false,
  error: false,
  currentPage: 1,
};

export const getCharacters = createAsyncThunk("get/char", async () => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/people");

    return data.results;
  } catch (error: any) {
    return error;
  }
});

export const getByName = createAsyncThunk("get/name", async (name: string) => {
  try {
    const { data } = await axios.get(
      `https://swapi.dev/api/people/?search=${name}`
    );
    console.log(data.results);
    return data.results;
  } catch (error) {
    return error;
  }
});

export const fetchPage = createAsyncThunk(
  "char/page",
  async (pageNumber: number) => {
    try {
      const { data } = await axios.get(
        `https://swapi.dev/api/people/?page=${pageNumber}`
      );
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    previousPage: (state) => {
      state.currentPage -= 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.status = "success";
      state.value = action.payload;
    });
    builder.addCase(getCharacters.pending, (state, action) => {
      state.status = "pending";
    });
    builder
      .addCase(getCharacters.rejected, (state, action) => {
        state.status = "rejected";
        state.value = [];
      })
      .addCase(getByName.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload;
      })
      .addCase(fetchPage.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchPage.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      });
  },
});

export default characterSlice.reducer;
export const { nextPage, previousPage, setPage } = characterSlice.actions;
