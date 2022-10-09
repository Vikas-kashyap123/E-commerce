import React from "react";
import { withFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link, Navigate } from "react-router-dom";
import Input from "./Input";

import axios from "axios";
import { withAlert, withUser } from "./withProvider";

function callLoginApi(values, bag) {
  console.log("sending data", values.email, values.password, values.fullName);
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      email: values.email,
      password: values.password,
      fullName: values.fullName,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      console.log("MyData", bag);
      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setAlert({
        type: "error",
        message: "User Already exists" + values.password + values.email,
      });
    });
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

export function SignUp({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  user,
}) {
  // const user = useContext(loginUserContext)
  // console.log("data in props", values, errors);
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-full max-w-6xl mx-auto mt-16 text-2xl bg-white ">
      <div className="max-w-5xl px-4 py-8 mx-2 space-y-8 bg-white md:mx-auto md:py-8">
        <h1 className="text-2xl font-bold text-gray-light">Signup</h1>
        <div className="flex justify-between">
          <form
            onSubmit={handleSubmit}
            className="max-w-5xl px-4 py-8 mx-2 space-y-8 bg-white md:mx-auto md:py-8"
          >
            <div className="max-w-5xl px-4 py-8 space-y-8 border border-gray-300 rounded-md -pl-8">
              <div>
                <Input
                  values={values.fullName}
                  error={errors.fullName}
                  touched={touched.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="fullName"
                  id="id"
                  type="text"
                  placeholder="Full Name"
                  label="fullName"
                  required
                />
              </div>
              <div>
                <Input
                  values={values.email}
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
                  placeholder="email"
                />
              </div>
              <div>
                <Input
                  values={values.number}
                  error={errors.number}
                  touched={touched.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Mobile Number"
                  name="number"
                  id="number"
                  required
                  label="Mobile Number"
                />
              </div>
              <div>
                <Input
                  values={values.password}
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
                  placeholder="current-password"
                />
              </div>
              <div>
                <Input
                  values={values.confirm_password}
                  error={errors.confirm_password}
                  touched={touched.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm Password"
                  name="confirm_password"
                  id="confirm_password"
                  type="password"
                  label="confirm_password"
                />
              </div>
              <div className="flex flex-row ">
                <div className="mt-3">
                  <div className="flex flex-col">
                    <Button type="submit">SignUp</Button>
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
                    login if you have Already an account
                  </h1>
                  <Link
                    className="max-w-xs px-8 py-2 text-sm font-bold text-white rounded-md bg-primary-default hover:bg-primary-dark"
                    to="/login"
                  >
                    login
                  </Link>
                </div>
              </div>
            </div>
          </form>

          <div>
            <img
              className="hidden md:block"
              src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/signup-icon.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const myHOC = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callLoginApi,
  validateOnMount: false,
});
const easySignup = myHOC(SignUp);
export default withUser(withAlert(easySignup));
