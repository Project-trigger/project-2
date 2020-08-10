import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import API from "../../utils/api";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";



const NewPost = () => {

//   // const [next, setNext] = useState(0)
//   // const [results, setResults] = useState([])
// const [topic, setTopic] = useState ("")
// const [incumbent_body, setIncumbent_body] = useState ("") 
// const [challenger_body, setChallenger_body] = useState ("") 

// const userid = props.match.params.topic
// const { getAccessTokenSilently } = useAuth0()

// const errorMessage = (message) => {
//   setShowError(true)
//   setErrorMessage(message)
//   setAddShow(true)
// };

// const getUserInfoApi = async () => {
//   const token = await getAccessTokenSilently()

//   var config = {
//     method: "get",
//     url: `/debates/newdebate?userid=${userid}`,
//     headers: { Authorization: `Bearer ${token}` },
//   };
  
//   axios(config)
//     .then(function (response) {

//     }
//     )
  
//   }


// }

  // useEffect(()=>{
  //   API.debates()
  //   .then(res =>{
  //     console.log(res.data)
  //     setResults(res.data)
  //     addContent(res.data);
  //   })
    
  // },[]
  // )
  // const addContent =(data, index) => {
  
  //   createTopic(data.topic)
  //   createIncumbentbody(data.incumbent_body)
  //   createChallengerbody(data.challenger_body)
    
  // }

  // function createDebate(debateData) {
  //   var newDebate = "";
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
  }

export default NewPost;