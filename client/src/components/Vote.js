import React from 'react';
import { Button } from '@material-ui/core';
import "./Vote.css"

const Vote = () => {
  return (
    <div className="votebtn">
       
        <div>
          <Button variant="contained" style={{backgroundColor: "#f77f00"}}
            onClick={() => {
              alert('clicked');
            }}
          >
            Vote A
          </Button>
        </div>
        <div>
          <Button variant="contained" style={{backgroundColor: "#fcbf49"}}
            onClick={() => {
              alert('clicked');
            }}
          >
            Vote B
          </Button>
        </div>
      
    </div>
  );
};

export default Vote;
