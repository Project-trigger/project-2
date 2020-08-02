import React from 'react';
import { Box } from '@material-ui/core';

const Post = () => {
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
            <label>
                <div>Topic:</div>
                <textarea type="text" name="topic" />
            </label>
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
            <label>
                Side A:
                <textarea type="text" name="incumbent" />
            </label>
          </div>

          <div
            style={{
              border: 'solid #fcbf49 5px',
              margin: '10px',
              width: '100%',
            }}
          >
            <label>
                Side B:
                <textarea type="text" name="challenger" />
            </label>
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Post