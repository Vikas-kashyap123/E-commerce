import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function LoginPage() {
  function callLoginApi(values) {
    console.log("sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .required()
      .min(8, "dont you know its really small")
      .max(14, "very bada password"),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <div className="h-full max-w-6xl mx-auto mt-16 text-2xl bg-white ">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl px-4 py-8 mx-2 space-y-8 bg-white md:mx-auto md:py-8"
      >
        <h1 className="text-2xl font-bold text-gray-light">Login</h1>
        <div className="max-w-5xl px-4 py-8 space-y-8 border border-gray-300 rounded-md -pl-8">
          <div>
            <h1 className="text-sm font-bold text-gray-light">
              Username or Email Address
            </h1>
            <label htmlFor="email-address" className="sr-only">
              Email Address
            </label>
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email-address"
              type="email"
              required
              autoComplete="email"
              className="relative block w-full h-12 text-gray-800 bg-white border border-gray-300 appearance-none 
              focus:z-10 focus:border-primary-default focus-outline-none focus:ring-primary-default "
            />
            {touched.email && errors.email && (
              <div className="text-primary-default">{errors.email}</div>
            )}
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-light">Password</h1>
            <label htmlFor="Password" className="sr-only">
              Password
            </label>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="relative block w-full h-12 text-gray-800 bg-white border border-gray-300
               appearance-none focus:z-10 focus:border-primary-default focus-outline-none
                focus:ring-primary-default"
            />
            {touched.password && errors.password && (
              <div className="text-primary-default">{errors.password}</div>
            )}
          </div>
          <div className="flex flex-row ">
            <div className="mt-3">
              <h1 className="text-sm font-bold text-gray-light">Remember me</h1>
              <div className="flex flex-col">
                <Button type="submit" disabled={!isValid}>
                  LOG IN
                </Button>
                <Link
                  className="pt-4 md:text-md text-sm font-black text-primary-default"
                  to="/forgot"
                >
                  Lost Your Password?
                </Link>
              </div>
            </div>
            <div className="mt-1 ml-5 text-gray-light ">
              <h1 className="md:text-md text-sm font-black">
                Signup if you dont have an account
              </h1>
              <Link
                className="max-w-xs px-8 py-2 text-sm font-bold text-white rounded-md
                 bg-primary-default hover:bg-primary-dark"
                to="/signup"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
