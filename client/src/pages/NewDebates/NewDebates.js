import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import API from "../../utils/api";
import { useAuth0 } from "@auth0/auth0-react";


const NewPost = () => {
  const { user } = useAuth0();
  const { picture, email, username } = user;

  const [state, setState] = useState({
    topic: "",
    arguement: "",
    counterArguement: ""
  })
  
  const handleInputChange= event => {
    const {name, value}= event.target
    setState({
      ...state,
      [name]:value
    })
    console.log(value);
  }

  const handleSave= event => {
console.log(state, user)
        const newdebates = {
          topic: state.topic,
          incumbent_body: state.arguement,
          challenger_body: state.counterArguement,
          username: user.name,
          email: user.email
        }
        API.newdebates(newdebates)
  }
  useEffect(()=>{
    API.newdebates()
    .then((res, req) =>{
      console.log(res)
      // setResults(res.data)
      // changeContent(res.data[0], 0);
    })
    
  },[]
  )


  return (
    <div className="form">
      <header className="appHeader">
        <h1>Triggered</h1>
      </header>
      
        <div>
          <form>
          <Post handleInputChange={handleInputChange} topic={state.topic} arguement={state.arguement} counterArguement={state.counterArguement} />
          </form>
        </div>
      
        <div className="submitBt">
              <input  onClick={handleSave} type="submit" name="Submit" style={{justifyContent: "center"}} />
            </div>
      </div>
    
  );
};

export default NewPost;

