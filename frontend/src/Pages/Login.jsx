import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Card,
  CardContent,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useForm } from "react-hook-form";
import ErrorImage from "../assets/error.png";
import { Link } from "react-router-dom";
import "../PagesStyles/SignUp.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registeredData, setRegisteredData] = useState({});
  const [open, setOpen] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };



  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
      });
      if (response.ok) {
        console.log("Logout successful");
        document.cookie = "Email=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        setLoggedIn(false);
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const onSubmit =async (data) => {
    setRegisteredData(data);
    console.log(data)
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Login successful");
        setLoggedIn(true);
        document.cookie = `Email=${registeredData.Email};expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/`;
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }


  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="modal-content">
          <DialogTitle>Login Sucessfull</DialogTitle>
          <h1 className="text-red">{Email}</h1>
          <Link to="/">
            <button className="btn">Back to home</button>
          </Link>
        </DialogContent>
      </Dialog>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ padding: "30px" }}>
          <CardContent>
            <Container maxWidth="lg" style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item md={6} xs={12}>
                  {loggedIn ? (
                    <div>
                      <p>Welcome, {registeredData.Email}!</p>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="form-signUp">
                      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                        Login
                      </Typography>

                      <div className="input-container">
                        <EmailIcon className="icon" />
                        <TextField
                        onChange={(e) => setEmail(e.target.value)}

                          label="Your Email"
                          variant="outlined"
                          fullWidth
                          {...register("Email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          })}
                        />
                        {errors.Email && (
                          <div className="error">
                            <img src={ErrorImage} alt="error" />
                            <p>{errors.Email.message}</p>
                          </div>
                        )}
                      </div>
                      <div className="input-container">
                        <LockIcon className="icon" />
                        <TextField
                        onChange={(e) => setPassword(e.target.value)}
                          label="Password"
                          type="password"
                          variant="outlined"
                          fullWidth
                          {...register("Password", {
                            required: true,
                           // pattern: /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                            // minLength: 10,
                            // maxLength: 20,
                          })}
                        />

                        {errors.password && (
                          <div className="error">
                            <img src={ErrorImage} alt="error" />
                            <p>{errors.password.message}</p>
                          </div>
                        )}
                      </div>

                      <Button type="submit" variant="contained" color="primary">
                        Login
                      </Button>
                    </form>
                  )}
                </Grid>
                <Grid item md={6} xs={12}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    alt="illustration"
                    style={{ marginTop: "70px", width: "100%" }}
                  />
                  <p id="login-text">
                    Don't have an Account?{" "}
                    <Link to="/signUp">
                      <span>Register</span>
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </Container>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Login;
