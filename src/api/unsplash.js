import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 7357a6202f26b8416946ece0a8f938a1b6007c6661167947e76d1a49bf66f803"
  }
});