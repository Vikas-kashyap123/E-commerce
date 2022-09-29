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
  name: Yup.string().required(),
  create_password: Yup.string().required().min(8),
  confirm_password: Yup.string().required().min(8),
  mobile_number: Yup.number().required().min(10).max(10),
});

const initialValues = { name: "", email: "", mobile_number: "" };

function SignUp({
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
        <h1 className="text-2xl font-bold text-gray-light">Signup</h1>
        <div className="flex justify-between">
          <div className="max-w-5xl px-4 py-8 space-y-8 border border-gray-300 rounded-md md:w-1/2 -pl-8">
            <div className="space-y-6">
              <div>
                <Input
                  value={values.name}
                  error={errors.name}
                  touched={touched.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="name"
                  id="id"
                  type="text"
                  placeholder="Full Name"
                  label="Name"
                />
              </div>
              <div>
                <Input
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <Input
                  value={values.number}
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
                  value={values.create_password}
                  error={errors.create_password}
                  touched={touched.create_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Create Password"
                  name="create_password"
                  id="create_password"
                  type="create_password"
                />
              </div>
              <div>
                <Input
                  value={values.confirm_password}
                  error={errors.confirm_password}
                  touched={touched.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm Password"
                  name="confirm_password"
                  id="confirm_password"
                  type="confirm_password"
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
          </div>

          <div>
            <img
              className="hidden md:block"
              src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/signup-icon.png"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

const signupHOC = withFormik({
  initialValues: initialValues,
  onSubmit: callLoginApi,
  validationSchema: schema,
});
const easySignup = signupHOC(SignUp);

export default easySignup;
