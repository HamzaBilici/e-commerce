import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDummy = createAsyncThunk(
  "getTextDataByLanguage",
  async () => {
    try {
      const payload = {value:0};

      const { data } = await axios.post(
        "https://reqres.in/api/workintech",
        payload,
        {
          headers: { "x-api-key": "reqres_fdb427e28b7f424e81dc5a3b7f94b91f" },
        },
      );

      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);