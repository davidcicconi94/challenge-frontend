import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Error } from "../interface/interfaces";

const initialState = {
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
};

export const getCharacters = createAsyncThunk("get/char", async () => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/people");
    console.log(data.results);
    return data.results;
  } catch (error: any) {
    return error;
  }
});

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.status = "success";
      state.value = action.payload;
    });
    builder.addCase(getCharacters.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.status = "rejected";
      state.value = [];
    });
  },
});

export default characterSlice.reducer;
