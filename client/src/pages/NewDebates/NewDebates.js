import React from "react";
import Post from "../../components/Post";



const NewPost = () => {



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