import { Button, TextField } from "@mui/material";

const SignUp = () => {
  const submitHandler = () => {
    console.log("Hello World");
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
            label="Username"
            variant="outlined"
          />
          <TextField
            sx={{
              marginTop: "20px",
            }}
            label="Email"
          />
          <TextField
            sx={{
              marginTop: "20px",
            }}
            label="Password"
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
