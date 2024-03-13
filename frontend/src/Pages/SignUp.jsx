import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import PersonIcon from "@mui/icons-material/Person";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useForm } from "react-hook-form";
import ErrorImage from "../assets/error.png";
import { Link } from "react-router-dom";
import "../PagesStyles/SignUp.css";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const [registeredData, setRegisteredData] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async(data) => {
    setRegisteredData(data);
    console.log(data)
      try {
        const response = await fetch("http://localhost:3000/add_user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({Email:data.email,Password:data.password}),
        });
        if (response.ok) {
          console.log("Registered successful");
          toast.success("Registration Successful !")
          setOpen(true);
        } else {
          console.error("Registration failed");
          toast.error("User Already registered")

        }
      } catch (error) {
        console.error("Registration failed:", error);
      }
  
  };

  useEffect(() => {
    console.log(registeredData);
  }, [registeredData]);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="modal-content">
          <DialogTitle>Thanks for Signing up</DialogTitle>
          <h1 className="text-red">{registeredData.name}</h1>
          <Link to="/">
            <button className="btn">Back to home</button>
          </Link>
        </DialogContent>
      </Dialog>
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{padding:'30px'}}>
          <CardContent>
            <Container maxWidth="lg" style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item md={6} xs={12}>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="form-signUp">
        <Typography variant="h4" align="center" gutterBottom fontWeight='bold'>
            Sign Up
        </Typography>
                    <div className="input-container">
                      <PersonIcon className="icon" />
                      <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        {...register("name", {
                          required: true,
                          minLength: 3,
                          maxLength: 30,
                        })}
                        />
                        {errors.name && (
                          <div className="error">
                            <img src={ErrorImage} alt="error" />
                            <p>{errors.name.message}</p>
                          </div>
                        )}
                    </div>
                    <div className="input-container">
                      <EmailIcon className="icon" />
                      <TextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        })}
                      />
                    {errors.email && (
                      <div className="error">
                        <img src={ErrorImage} alt="error" />
                        <p>{errors.email.message}</p>
                      </div>
                    )}
                    </div>
                    <div className="input-container">
                      <LockIcon className="icon" />
                      <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        {...register("password", {
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
                    <div className="input-container">
                      <LockIcon className="icon" />
                      <TextField
                        label="Repeat your password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        {...register("confirmpassword", {
                          required: true,
                          validate: (value) => value === watch("password"),
                        })}
                      />
                    {errors.confirmpassword && (
                      <div className="error">
                        <img src={ErrorImage} alt="error" />
                        <p>{errors.confirmpassword.message}</p>
                      </div>
                    )}
                    </div>
                    <div className="input-container">
                      <CheckBoxIcon className="icon" />
                      <label htmlFor="newsletter">
                        Subscribe to our newsletter
                      </label>
                      <input
                        type="checkbox"
                        id="newsletter"
                        {...register("newsletter")}
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      
                    >
                      Register
                    </Button>
                  </form>
                </Grid>
                <Grid item md={6} xs={12}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    alt="illustration"
                    style={{ marginTop:'70px',width: '100%' }}
                  />
                  <p id="login-text">Already have an Account? <Link to='/login'><span>Login</span></Link></p>
                </Grid>
              </Grid>
            </Container>
          </CardContent>
        </Card>
      </div>
      <ToastContainer/>
    </>
  );
}

export default SignUp;
