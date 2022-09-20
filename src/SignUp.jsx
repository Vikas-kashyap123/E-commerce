import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function SignUp() {
  function callLoginApi(values) {
    console.log("sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string().required(),
    create_password: Yup.string().required().min(8),
    confirm_password: Yup.string().required().min(8),
    mobile_number: Yup.string().required(),
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
      name: "",
      email: "",
      mobile_number: "",

      create_password: "",
      set_password: "",
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
        <h1 className="text-2xl font-bold text-gray-light">Signup</h1>
        <div className="flex justify-between">
          <div className="max-w-5xl px-4 py-8 space-y-8  md:w-1/2 border border-gray-300 rounded-md -pl-8">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                id="name"
                type="text"
                placeholder="  Full Name"
                required
                className="relative block w-full pl-2  h-12 text-gray-800 bg-white border border-gray-300 appearance-none 
              focus:z-10 focus:border-primary-default focus-outline-none focus:ring-primary-default "
              />
              {touched.name && errors.name && (
                <div className="text-primary-default">{errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                email
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                type="email"
                name="email"
                placeholder="  Enter Your Email"
                required
                autoComplete="email"
                className="relative block w-full pl-2  h-12 text-gray-800 bg-white border border-gray-300
               appearance-none focus:z-10 focus:border-primary-default focus-outline-none
                focus:ring-primary-default"
              />
              {touched.email && errors.email && (
                <div className="text-primary-default">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="number" className="sr-only">
                number
              </label>
              <input
                name="number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                id="number"
                placeholder="  Enter Mobile Number"
                required
                className="relative block w-full pl-2 h-12 text-gray-800 bg-white border border-gray-300 appearance-none 
              focus:z-10 focus:border-primary-default focus-outline-none focus:ring-primary-default "
              />
              {touched.number && errors.number && (
                <div className="text-primary-default">{errors.number}</div>
              )}
            </div>
            <div>
              <label htmlFor="create_password" className="sr-only">
                create password
              </label>
              <input
                name="create_password"
                value={values.create_password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="create_password"
                type="create_password"
                placeholder="  Create Password"
                required
                className="relative block w-full pl-2  h-12 text-gray-800 bg-white border border-gray-300 appearance-none 
              focus:z-10 focus:border-primary-default focus-outline-none focus:ring-primary-default "
              />
              {touched.create_password && errors.create_password && (
                <div className="text-primary-default">
                  {errors.create_password}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="confirm_password" className="sr-only">
                confirm password
              </label>
              <input
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirm_password"
                type="confirm_password"
                placeholder="  Confirm Password"
                required
                className="relative block w-full pl-2 h-12 text-gray-800 bg-white border border-gray-300 appearance-none 
              focus:z-10 focus:border-primary-default focus-outline-none focus:ring-primary-default "
              />
              {touched.confirm_password && errors.confirm_password && (
                <div className="text-primary-default">
                  {errors.confirm_password}
                </div>
              )}
            </div>

            <div className="mt-3">
              <Button type="submit" disabled={!isValid}>
                Signup
              </Button>
              <div className="flex mt-3 gap-2">
                <h1>Already have an Account? </h1>
                <Link
                  className="text-primary-default font-bold hover:text-primary-dark"
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

export default SignUp;
