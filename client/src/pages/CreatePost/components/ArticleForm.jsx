import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ArticleForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      titleText: "",
      userName: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      titleText: Yup.string().required("Required"),
      userName: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://localhost:3001/posts", values)
        .then((response) => {
          // console.log(response);
          resetForm();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="input-field"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error-message">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="titleText">Enter your article text</label>
        <textarea
          id="titleText"
          name="titleText"
          className="input-field"
          onChange={formik.handleChange}
          value={formik.values.titleText}
        />
        {formik.touched.titleText && formik.errors.titleText ? (
          <div className="error-message">{formik.errors.titleText}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="userName">Enter your name</label>
        <input
          id="userName"
          name="userName"
          type="text"
          className="input-field"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div className="error-message">{formik.errors.userName}</div>
        ) : null}
      </div>

      <button type="submit" className="submit-button">
        SUBMIT
      </button>
    </form>
  );
};

export default ArticleForm;
