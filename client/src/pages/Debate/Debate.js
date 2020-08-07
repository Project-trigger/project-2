import React, { useState, useEffect } from "react";
import Vote from "../../components/Vote";
import Argument from "../../components/Argument";
import Comment from "../../components/Comment";
import API from "../../utils/api";
import "./Debate.css";
import { useAuth0 } from "@auth0/auth0-react";

const Debate = () => {

  const [next, setNext] = useState(0)
  const [results, setResults] = useState([])
const [topic, setTopic] = useState ("")
const [incumbentbody, setIncumbentbody] = useState ("") 
const [challengerbody, setChallengerbody] = useState ("") 

useEffect(()=>{
  API.debates()
  .then(res =>{
    console.log(res.data)
    setResults(res.data)
    changeContent(res.data[0], 0);
  })
  
},[]
)
const changeContent =(data, index) => {
  
  setTopic(data.topic)
  setIncumbentbody(data.incumbent_body)
  setChallengerbody(data.challenger_body)
  const nextData = index+1
  setNext(nextData)
}

const handlerNextClick = () => {
  let index=next;
  if(next>=results.length) {
    index=0
  }
  changeContent(results[index], index)  
}

  return (
    <div className="form">
      <header className="appHeader">
        <h1>Triggered</h1>
      </header>

      
        <div>
          <form>
          <Argument handlerNextClick={handlerNextClick} topic={topic} incumbent_body={incumbentbody} challenger_body={challengerbody}/>

          <Vote />
          <Comment />
        </form>
      </div>


    </div>

  );
};

export default Debate;
