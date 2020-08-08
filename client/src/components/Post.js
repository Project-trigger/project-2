import React from "react";
import { Box, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const { isAuthenticated, user } = useAuth0();

const Post = ({
  debatePostClick,
  user_id,
  incumbent_username,
  challenger_username,
  topic,
  incumbent_body,
  challenger_body,
  createdAt,
  updatedAt,
}) => {
  let user_id = "";
  if (isAuthenticated) {
    user_id = `${user.user_id}`;
  }
  let { incumbent_username } = "";
  if (isAuthenticated) {
    incumbent_username = `${user.name}`;
  }

  return (
    <React.Fragment>
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          textAlign="center"
          style={{ marginTop: "50px", fontSize: "25px" }}
        >
          <div
            style={{
              backgroundColor: "#f2cc8f",
              color: "black",
              width: "95%",
              margin: "0, 5",
            }}
          >
            <label>
              <div>Topic:</div>
              <textarea type="text" id={topic} />
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
              border: "solid #d62828 5px",
              margin: "10px",
              width: "100%",
            }}
          >
            <label>
              Side A:
              <textarea type="text" id={incumbent_body} />
            </label>
          </div>

          <div
            style={{
              border: "solid #fcbf49 5px",
              margin: "10px",
              width: "100%",
            }}
          >
            <label>
              Side B:
              <textarea type="text" id={challenger_body} />
            </label>
          </div>
        </Box>
      </Box>
      <Button
        onClick={debatePostClick}
        style={{ color: "black", float: "left" }}
      >
        Submit
      </Button>
    </React.Fragment>
  );
};

export default Post;
