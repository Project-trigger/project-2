import React from 'react';
import { Box } from '@material-ui/core';


const Argument = () => {
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
            Who is the better Super hero?
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
            Batman has all the gadgets and is a millionaire
          </div>

          <div
            style={{
              border: 'solid #fcbf49 5px',
              margin: '10px',
              width: '100%',
            }}
          >
            Superman is an alien with super powers. He can shoot rays
            out of his eyes.
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Argument;
