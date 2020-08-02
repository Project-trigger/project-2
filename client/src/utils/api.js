import axios from "axios";

// update commands to get arguements

export default {
  getDebates: function() {
    return axios.get("/api/debates");
  },

  createUser: function(user){
    return axios.post({
      url:"/api/user",
      body: user
    })
  }
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};