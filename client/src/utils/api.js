import axios from "axios";

// update commands to get arguements

export default {
  getDebates: function() {
    return axios.get("/api/debates");
  },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};