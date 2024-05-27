import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      userName,
      email,
      password,
    };

    const res = await axios.post("http://192.168.29.141:8080/createUser", data);
    console.log(res);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div>
        <h1 className="text-xl">Sign Up for Activity Tracker</h1>
      </div>
      <div className="w-1/4 mt-12">
        <form className="flex flex-col">
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
            onClick={submitHandler}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
