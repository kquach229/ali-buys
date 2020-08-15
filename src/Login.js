import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Login.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Login = () => {
  const classes = useStyles();
  const [name, setName] = useState("Cat in the Hat");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="login">
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="login__inputs">
            <h1>Login</h1>
            <TextField
              id="standard-name"
              label="Name"
              value={name}
              onChange={handleChange}
            />
            <TextField
              id="standard-uncontrolled"
              label="Uncontrolled"
              defaultValue="foo"
            />
          </div>
          <Link to="/">
            <button>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
