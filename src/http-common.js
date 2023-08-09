// initializes axios with HTTP base Url and headers.

import axios from "axios";

export default axios.create({
    // connecting to our local db
  baseURL: "http://34.204.12.93:8005",
  //baseURL: "http://52.90.135.103:8005/students",
  headers: {
    "Content-type": "application/json"
  }
});