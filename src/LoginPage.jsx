import React from "react";
import { withFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";

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

const initialValues = {
  email: "",
  password: "",
};

function LoginPage({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
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
            <Input
              value={values.email}
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email address"
              id="email-address"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-light">Password</h1>
            <Input
              value={values.password}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Password"
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>
          <div className="flex flex-row ">
            <div className="mt-3">
              <h1 className="text-sm font-bold text-gray-light">Remember me</h1>
              <div className="flex flex-col">
                <Button type="submit">LOG IN</Button>
                <Link
                  className="pt-4 text-sm font-black md:text-md text-primary-default"
                  to="/forgot"
                >
                  Lost Your Password?
                </Link>
              </div>
            </div>
            <div className="mt-1 ml-5 text-gray-light ">
              <h1 className="text-sm font-black md:text-md">
                Signup if you dont have an account
              </h1>
              <Link
                className="max-w-xs px-8 py-2 text-sm font-bold text-white rounded-md bg-primary-default hover:bg-primary-dark"
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

const myHOC = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callLoginApi,
  validateOnMount: false,
});
const easyLogin = myHOC(LoginPage);
export default easyLogin;

//  <Formik
//         initialValues={initialValues}
//         onSubmit={callLoginApi}
//         validationSchema={schema}
//         validateOnMount
//       ></Formik>
