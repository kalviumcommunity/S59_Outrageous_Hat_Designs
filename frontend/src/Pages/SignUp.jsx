import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Error from "../assets/error.png";

function App() {
  const form = useForm();
  const { register, handleSubmit, watch, formState } = form;
  const { errors } = formState;
  const [registeredData, setRegisteredData] = useState([]);

  const onSubmit = (data) => {
    setRegisteredData(data);
  };

  useEffect(() => {
    console.log(registeredData);
  }, [registeredData]);

  return (
    <>
      {formState.isSubmitSuccessful && (
        <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50">
          <div className="shadow-2xl bg-white p-16 absolute z-10 rounded-lg text-green-500 font-bold flex flex-col items-center gap-12 ml-2 mr-2 md:m-0 ">
            <h1 className="font-body text-3xl md:text-4xl text-center">
              Thanks for Signing up
            </h1>
            <h1 className="font-body text-2xl md:text-3xl text-center text-red-400">
              {registeredData.name}
            </h1>
            <Link to="/">
              <button className="bg-blue-500 shadow-lg shadow-blue-500/50 p-3 rounded-md text-white font-semibold font-body text-2xl hover:bg-blue-600">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      )}
      <div
        className="flex items-center justify-center relative top-12 bg-cover "
      >
        <div className="shadow-2xl bg-white bg-opacity-50 p-10 m-10 mb-40 mt-40 rounded-lg w-full md:w-fit md:p-20 md:m-40">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className=" h-full p-3 flex flex-col items-center justify-center"
          >
            {formState.isSubmitSuccessful ? (
              <h1 className="text-green-600 font-bold text-3xl text-center mb-4">
                Registration Successful!
              </h1>
            ) : (
              <h1 className="text-blue-600 font-bold text-3xl mb-4 text-center">
                Literary Account Registration
              </h1>
            )}
            <div className="w-full">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: { value: true, message: "Name is required" },
                    validate: {
                      checkName: (fieldValue) =>
                        fieldValue.length >= 3 ||
                        "Name must be more than 3 characters",
                      greaterThan: (fieldValue) =>
                        fieldValue.length <= 30 ||
                        "Name cannot be more than 30 characters",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.name?.message && (
                  <div className="flex">
                    <img src={Error} alt="error" className="h-4 m-1" />
                    <p className="text-red-500 text-xs md:text-sm italic">
                      {errors?.name?.message}
                    </p>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your Email",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.email?.message && (
                  <div className="flex">
                    <img src={Error} alt="error" className="h-4 m-1" />
                    <p className="text-red-500 text-xs md:text-sm italic">
                      {errors?.email?.message}
                    </p>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: { value: true, message: "Password is required" },
                    pattern: {
                      value: /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                      message: "Password should contain a special character",
                    },
                    validate: {
                      checkPassword: (fieldValue) =>
                        fieldValue.length >= 10 ||
                        "Password must be 10 characters long",
                      greaterThan: (fieldValue) =>
                        fieldValue.length <= 20 ||
                        "Password cannot be more than 20 characters",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.password?.message && (
                  <div className="flex">
                    <img src={Error} alt="error" className="h-4 m-1" />
                    <p className="text-red-500 text-xs md:text-sm italic">
                      {errors?.password?.message}
                    </p>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmpassword", {
                    required: { value: true, message: "Confirm your password" },
                    validate: {
                      checkingPassword: (fieldValue) =>
                        fieldValue === watch("password") ||
                        "Password does not match",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.confirmpassword?.message && (
                  <div className="flex">
                    <img src={Error} alt="error" className="h-4 m-1" />
                    <p className="text-red-500 text-xs md:text-sm italic">
                      {errors?.confirmpassword?.message}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
