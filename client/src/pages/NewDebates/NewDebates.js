import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import API from "../../utils/api";



const NewPost = () => {

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