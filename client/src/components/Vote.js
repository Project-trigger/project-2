import React from 'react';
import { Button, Box } from '@material-ui/core';
import "./Vote.css"

const Vote = () => {
  return (
    <div className="votebtn">
       
        <div>
          <Button variant="contained" style={{backgroundColor: "#d62828"}}
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