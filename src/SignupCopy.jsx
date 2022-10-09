import React from "react";
import { withFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link, Navigate } from "react-router-dom";
import Input from "./Input";
import { loginUserContext } from "./App";
import { useContext } from "react";
import axios from "axios";

function callSignupApi(values, bag) {
  console.log("sending data", values.fullName, values.email, values.password);
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      console.log("MyData", bag);
      bag.props.setUser(user);
    })
    .catch(() => {
      console.log("Invalid Credentials");
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  fullName: Yup.string().required(),
  password: Yup.string().required().min(8),
  confirm_password: Yup.string().required().min(8),
  mobile_number: Yup.number().required(),
});

const initialValues = {
  name: "",
  email: "",
  mobile_number: "",
  password: "",
  confirm_password: "",
};

export function SignUp({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  console.log("handleSubmit called", handleSubmit);
  const user = useContext(loginUserContext);
  console.log("data in props", values, errors);
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
            className="max-w-5xl px-4 py-8 space-y-8 border border-gray-300 rounded-md md:w-1/2 -pl-8"
          >
            <div className="space-y-6">
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
                />
              </div>
              <div>
                <Input
                  values={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter Your Email"
                  type="email"
                  label="fullName"
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
                />
              </div>
              <div>
                <Input
                  values={values.password}
                  error={errors.password}
                  touched={touched.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Create Password"
                  name="password"
                  id="password"
                  type="password"
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
                />
              </div>
            </div>

            <div className="mt-3">
              <Button type="submit">Signup</Button>
              <div className="flex gap-2 mt-3">
                <h1>Already have an Account? </h1>
                <Link
                  className="font-bold text-primary-default hover:text-primary-dark"
                  to="/login"
                >
                  Login
                </Link>
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

const signupHOC = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callSignupApi,
  validateOnMount: false,
});
const easySignup = signupHOC(SignUp);

export default easySignup;

{
  /* <div className="mt-3">
  <Button type="submit">Signup</Button>
  <div className="flex gap-2 mt-3">
    <h1>Already have an Account? </h1>
    <Link
      className="font-bold text-primary-default hover:text-primary-dark"
      to="/login"
    >
      Login
    </Link>
  </div>
</div>; */
}

{
  /* <div className="space-y-6">
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
    />
  </div>
  <div>
    <Input
      values={values.email}
      error={errors.email}
      touched={touched.email}
      onChange={handleChange}
      onBlur={handleBlur}
      id="email"
      name="email"
      autoComplete="email"
      placeholder="Enter Your Email"
      type="email"
      label="fullName"
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
    />
  </div>
  <div>
    <Input
      values={values.password}
      error={errors.password}
      touched={touched.password}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Create Password"
      name="password"
      id="password"
      type="password"
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
    />
  </div>
</div>; */
}
