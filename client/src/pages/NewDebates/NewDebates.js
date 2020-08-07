import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import API from "../../utils/api";



const NewPost = () => {

//   // const [next, setNext] = useState(0)
//   const [results, setResults] = useState([])
// const [topic, createTopic] = useState ("")
// const [incumbentbody, createIncumbentbody] = useState ("") 
// const [challengerbody, createChallengerbody] = useState ("") 


//   useEffect(()=>{
//     API.debates()
//     .then(res =>{
//       console.log(res.data)
//       setResults(res.data)
//       addContent(res.data);
//     })
    
//   },[]
//   )
//   const addContent =(data, index) => {
  
//     createTopic(data.topic)
//     createIncumbentbody(data.incumbent_body)
//     createChallengerbody(data.challenger_body)
    
//   }

  // function createDebate(debateData) {
  //   var newDebate = $("");
  //   newDebate.data("debates", debateData);
  //   newDebate.append("" + debateData.topic + "")
  //   newDebate.append("" + debateData.incumbent + "")
  //   newDebate.append("" + debateData.challenger + "")
  
  // }

  return (
    <div className="form">
      <header className="appHeader">
        <h1>Triggered!!!</h1>
      </header>
      
        <div>
          <form>
          <Post />
          </form>
        </div>
      
        <div className="submitBt">
              <input type="submit" name="Submit" style={{justifyContent: "center"}} />
            </div>
      </div>
    
  );
};

export default NewPost;