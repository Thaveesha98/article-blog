import React from "react";
import { Formik, Field } from "formik"; // Import Formik instead of useFormik
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate("");
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:3001/auth/login", values)
            .then((response) => {
              if (response.data.error) alert(response.data.error);
              sessionStorage.setItem("accessToken", response.data);
              resetForm();
              navigate("/");
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("wrong user name and password combination");
            });
          console.log(values);
        }}>
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="form-container"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            <div>
              <div>
                <label>Username</label>
                <Field name="username" placeholder="Enter your Username" />
              </div>
              <div>
                <label>Password</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="submit-button"
              style={{ position: "absolute", right: "10px", bottom: "0px" }}>
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
