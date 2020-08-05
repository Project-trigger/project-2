import React, { useState, useEffect } from "react";
import Vote from "../../components/Vote";
import Argument from "../../components/Argument";
import Comment from "../../components/Comment";
import API from "../../utils/api";
import "./Debate.css";
import { useAuth0 } from "@auth0/auth0-react";

const Debate = () => {
  const [topic, setTopic] = useState("")
  const [incumbentbody, setIncumbentbody] = useState("")
  const [challengerbody, setChallengerbody] = useState("")
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    API.debates()
      .then(results => {
        console.log(results.data.topic)
        setTopic(results.data.topic)
        setIncumbentbody(results.data.incumbent_body)
        setChallengerbody(results.data.challenger_body)
      })

  })
  return (
    <div className="form">
      <header className="appHeader">
        <h1>Triggered</h1>
      </header>
      {isAuthenticated ? <> Hi {user.name} </> : null}
      <div>
        <form>
          <Argument topic={topic} incumbent_body={incumbentbody} challenger_body={challengerbody} />
          <Vote />
          <Comment />
        </form>
      </div>


    </div>

  );
};

export default Debate;
