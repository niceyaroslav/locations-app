
import axios from "axios";
//axios.defaults.timeout = 3000;
export default axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json"
  }
});