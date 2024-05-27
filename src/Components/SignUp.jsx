import {
  Button,
  TextField,
  Backdrop,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRef, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const loginMessage = "Login on the chrome extension NOW!";

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      userName,
      email,
      password,
    };

    try {
      const res = await axios.post(
        "http://192.168.29.141:8080/createUser",
        data
      );
      setResponseMessage(res.data.message);
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      setSnackbarOpen(true);
    }
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div>
        <h1 className="text-xl">Sign Up for Activity Tracker</h1>
      </div>
      <div className="w-1/4 mt-12">
        <form className="flex flex-col" onSubmit={submitHandler}>
          <TextField
            sx={{
              marginTop: "20px",
            }}
            inputRef={userNameRef}
            label="Username"
            variant="outlined"
          />
          <TextField
            sx={{
              marginTop: "20px",
            }}
            inputRef={emailRef}
            label="Email"
            variant="outlined"
          />
          <TextField
            sx={{
              marginTop: "20px",
            }}
            inputRef={passwordRef}
            label="Password"
            type="password"
            variant="outlined"
          />

          <Button
            sx={{
              marginTop: "20px",
            }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {responseMessage + " " + loginMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignUp;
