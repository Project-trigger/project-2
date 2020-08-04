import React from 'react';
import { Box } from '@material-ui/core';


const Argument = ({topic, incumbent_body, challenger_body}) => {
  return (
    <React.Fragment>
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          textAlign="center"
          style={{ marginTop: '50px', fontSize: '25px' }}
        >
          <div
            style={{
              backgroundColor: '#f2cc8f',
              color: 'black',
              width: '95%',
              margin: '0, 5',
            }}
          >
            {topic}
          </div>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <div
            style={{
              border: 'solid #d62828 5px',
              margin: '10px',
              width: '100%',
            }}
          >
            {incumbent_body}
          </div>

          <div
            style={{
              border: 'solid #fcbf49 5px',
              margin: '10px',
              width: '100%',
            }}
          >
            {challenger_body}
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Argument;
