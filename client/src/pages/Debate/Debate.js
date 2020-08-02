import React from "react";
import Vote from "../../components/Vote";
import Argument from "../../components/Argument";
import Comment from "../../components/Comment";
import "./Debate.css"


const Debate = () => {



  return (
    <div className="form">
      <header className="appHeader">
        <h1>Triggered!!!</h1>
      </header>
      
        <div>
          <form>
          <Argument />
          <Vote />
          <Comment />
          </form>
        </div>
      
      
      </div>
    
  );
};

export default Debate;
