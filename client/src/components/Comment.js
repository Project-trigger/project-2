import React from 'react';
import { TextField, Box } from '@material-ui/core';

const Comment = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      textAlign="center"

    >
      <TextField
        id="filled-multiline-static"
        label="Comments"
        multiline
        rows={4}
        defaultValue=""
        variant="filled"
        style={{
          backgroundColor: 'white',
          width: '95%',
          marginTop: '30px',
        }}
      />
    </Box>
  );
};

export default Comment;
