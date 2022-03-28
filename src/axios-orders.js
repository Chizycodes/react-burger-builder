import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-da864-default-rtdb.firebaseio.com/",
});

export default instance;
