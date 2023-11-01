import React, { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import checkValidation from "../utils/Validation";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setSignInFrom] = useState(true);
  const [errmessage, setErrMessage] = useState(true);

  const empid = useRef(null);
  const password = useRef(null);

  const handleButtonCLicked = () => {
    const message = checkValidation(
      empid.current.value,
      password.current.value
    );
    setErrMessage(message);
  };
  const toggleSignInForm = () => {
    setSignInFrom(!isSignInForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      style={{
        backgroundImage:
          "url(https://darwinbox.darwinbox.in/images/Icons_latest/login-bg.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, textAlign: "center" }}>
          <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              inputRef={empid}
              label="Employer ID"
              varant="outlined"
              fullWidth
              margin="normal"
            />
            
            {!isSignInForm && (
              <TextField
                label="Full Name"
                varant="outlined"
                fullWidth
                margin="normal"
              />
            )}
            <TextField
              inputRef={password}
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
            />
            <Typography sx={{ color: "red", textAlign: "left"}}>{errmessage}</Typography>
            
            <Link to="/browse">
            <Button
              type="submit"
              onClick={handleButtonCLicked}
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20 }}
              >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </Button>
            </Link>
            <Typography
              onClick={toggleSignInForm}
              sx={{ marginTop: 4, cursor: "pointer" }}
            >
              {isSignInForm
                ? "New User ? Sign Up Now"
                : "Already registered ? Sign In now"}
            </Typography>
          </form>
    
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
