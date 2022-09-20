import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function ForgotPassword() {
  function callLoginApi(values) {
    console.log("sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
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
        <div className="md:flex">
          <div className="max-w-5xl px-4 py-8 md:w-1/2 space-y-8 border border-gray-300 rounded-md -pl-8">
            <div>
              <h1 className="text-sm font-bold text-gray-light">
                Mobile number or Email Address
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
                placeholder="Email or Number"
                className="relative block pl-2 w-full h-12 text-gray-800 bg-white border border-gray-300 appearance-none 
              focus:z-10 focus:border-primary-default focus-outline-none focus:ring-primary-default "
              />
              {touched.email && errors.email && (
                <div className="text-primary-default">{errors.email}</div>
              )}
            </div>

            <div className="flex flex-row justify-between">
              <div className="mt-3">
                <h1 className="text-sm font-bold text-gray-light">
                  Remember me
                </h1>
                <Button type="submit">SetPassword</Button>
              </div>
              <div className="ml-2 pt-8 text-gray-light">
                <Link
                  className="max-w-xs px-8 py-2 text-sm font-bold text-white rounded-md
                 bg-primary-default hover:bg-primary-dark"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="hidden md:block w-full"
              src="https://e7.pngegg.com/pngimages/61/200/png-clipart-computer-icons-password-user-forgot-text-area.png"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
