import axios from "axios";

export default axios.create({
  baseURL: "https://61cd8ba97067f600179c5b01.mockapi.io/api/data/",
  headers: {
    "Content-type": "application/json",
  },
});
