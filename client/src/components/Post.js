import React from 'react';
import { TextField, Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';



const Post = (props) => {
  return (
    <Container fixed>
    <Box display="flex"
  justifyContent="center"
  alignItems="center">
    <TextField
        id="filled-multiline-static"
        label="Topic"
        multiline
        rows={4}
        defaultValue=""
        variant="filled"
        style={{
          backgroundColor: 'white',
          width: '50%',
          marginTop: '10px',
          
        }}
        name="topic"
        value={props.topic}
        onChange={props.handleInputChange}
      />
    </Box>
    
    <Box  display="flex"
  justifyContent="center"
  alignItems="center">
    <TextField
        id="filled-multiline-static1"
        label="Arguement"
        multiline
        rows={4}
        defaultValue=""
        variant="filled"
        style={{
          backgroundColor: 'white',
          width: '60%',
          marginTop: '10px',
          
        }}
        name="arguement"
        value={props.arguement}
        onChange={props.handleInputChange}
      />
    </Box>
    <Box  display="flex"
  justifyContent="center"
  alignItems="center"
  >
    <TextField
        id="filled-multiline-static2"
        label="Counter Arguement"
        multiline
        rows={4}
        defaultValue=""
        variant="filled"
        style={{
          backgroundColor: 'white',
          width: '60%',
          marginTop: '10px',
          
        }}
        name="counterArguement"
        value={props.counterArguement}
        onChange={props.handleInputChange}
      />
    </Box>
    </Container>
  );
};

export default Post