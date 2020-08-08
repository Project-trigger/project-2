import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Next } from 'react-bootstrap/esm/PageItem';



const Argument = ({ handlerNextClick, topic, incumbent_body, challenger_body }) => {
  return (
    <React.Fragment>
      <Button onClick={handlerNextClick} style={{ color: "white", float: "right" }}>Next</Button>
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
              backgroundColor: '#F77F00',
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
              border: 'solid #F77F00 5px',
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
