import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate("");
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string().min(3).max(15).required(),
          password: Yup.string().min(6).max(20).required(),
        })}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:3001/auth", values)
            .then((response) => {
              console.log(response);
              resetForm();
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          console.log(values);
          navigate("/login");
        }}>
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="form-container"
            style={{ position: "relative" }}>
            <label>Username</label>
            <Field name="username" placeholder="Create Username" />
            <label>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Create Password"
            />
            <button
              type="submit"
              className="submit-button"
              style={{ position: "absolute", right: "10px", bottom: "0px" }}>
              SignUp
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
