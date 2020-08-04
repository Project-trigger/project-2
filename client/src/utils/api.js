import axios from "axios";

// update commands to get arguements

export default {
  signUp: function () {
    return axios.get("/api/users/signup");
  },
  logIn: function () {
    return axios.post("/api/users/login");
  },
  //   getDogsOfBreed: function(breed) {
  //     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  //   },
  //   getBaseBreedsList: function() {
  //     return axios.get("https://dog.ceo/api/breeds/list");
  //   }
};
