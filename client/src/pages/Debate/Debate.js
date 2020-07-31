import React from "react";
import "./Debate.css"

const Debate = () => {



  return (
    <div className="form">
      <header className="appHeader">
        <h1>Triggered!!!</h1>
      </header>
      
        <div>
          <form className="appBody">
            <div className="debate">
                {/* this will be the question */}
            </div>
            <div>
                {/* arguement A */}
            </div>
            <div>
                {/* arguement B */}
            </div>

            <div className="voteBt">
              <input type="submit" name="A" />
            </div>
            <div className="voteBt">
              <input type="submit" name="B" />
            </div>
          </form>
        </div>
      
      
      </div>
    
  );
};

export default Debate;
