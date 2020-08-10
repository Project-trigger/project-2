import React from "react";
import "./Login.css"
import "../Account/Account"
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import SmsSharpIcon from '@material-ui/icons/SmsSharp';
import Loginbutton from "../../components/Loginbutton";
import Logoutbutton from "../../components/Logoutbutton";
import Signupbutton from "../../components/Signupbutton";
import { orange } from "@material-ui/core/colors";


const Login = () => {
  return (
    <div>
      <div className="form">

        <header className="appHeader">
          <h1>Triggered</h1> <SmsSharpIcon />
        </header>


        <form className="appBody">
          <div className="loginbtn" style={{ color: orange }}>
            <Loginbutton />
          </div>
          <div className="signupbtn">
            <Signupbutton />
          </div>
          <div className="logoutbtn">
            <Logoutbutton />
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;

//  return (
//   <div className="form">

  //     <header className="appHeader">
  //       <h1>Triggered!!!</h1> <SmsSharpIcon />
  //     </header>

  //     <div>
  //       <form className="appBody">


  //         <div className="input">
  //           <label>Username:</label>
  //           <input type="text" name="username" />
  //         </div>

  //         <div className="input">
  //           <label>Password:</label>
  //           <input type="text" name="password" />
  //         </div>
  //         {/* submit button currently has no function.  Please add functionality. */}
  //         <div className="submitBt">
  //           <input type="submit" name="Submit" />
  //         </div>
  //       </form>
  //     </div>

  //     <div className="footer">
  //       Not a member?
  //       <Link to="/account"
  //         style={{ marginLeft: "10px", color: "#f77f00" }}
  //       >
  //         Create an Account
  //       </Link>
  //     </div>
  //   </div>
//   );
// };




// export default Login;
