import React from "react";
import { Formik, Form } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";

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

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="h-full max-w-6xl mx-auto mt-16 text-2xl bg-white ">
      <Formik
        initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
        validateOnMount
      >
        <Form className="max-w-5xl px-4 py-8 mx-2 space-y-8 bg-white md:mx-auto md:py-8">
          <h1 className="text-2xl font-bold text-gray-light">Login</h1>
          <div className="max-w-5xl px-4 py-8 space-y-8 border border-gray-300 rounded-md -pl-8">
            <div>
              <h1 className="text-sm font-bold text-gray-light">
                Username or Email Address
              </h1>
              <Input
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
                <h1 className="text-sm font-bold text-gray-light">
                  Remember me
                </h1>
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
        </Form>
      </Formik>
    </div>
  );
}

export default LoginPage;
