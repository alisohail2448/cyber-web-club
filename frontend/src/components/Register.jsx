import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import axios from 'axios';

const registerSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be Valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile No is Required"),
  year: yup.string().required("Year No is Required"),
  branch: yup.string().required("Branch No is Required"),
  domain: yup.string().required("Domain No is Required"),
  github: yup.string().required("Github No is Required"),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      year: "",
      branch: "",
      domain: "",
      github: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await registerUser(values);
        toast.success("Student Registered!");
        resetForm(); // Reset the form values
      } catch (error) {
        console.error(error); // Handle any errors
      }
    },
  });

  const registerUser = async (userData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        mobile: userData.mobile,
        year: userData.year,
        branch: userData.branch,
        domain: userData.domain,
        github: userData.github,
      });
      toast.success("Student Registered!")
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  return (
    <div className="contact-section w-full h-[100%] bg-black mt-[40px]">
      <h3 className="text-[#00FF84] text-2xl text-center ">{`<Registration/>`}</h3>
      <div className="form w-full h-[100%] ">
        <form action="" className="flex flex-col gap-5 items-center mt-[40px]" onSubmit={formik.handleSubmit} >
          <div className=" flex justify-center items-center w-[70%] h-[100%] gap-10 mobile-register">
            <div className="left w-[50%] h-[100%] gap-5">
              <label
                htmlFor="name"
                className="text-white text-xl"
              >{`<Firstname/>`}</label>
              <input
                type="text"
                className="register-contact"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange("firstname")}
                onBlur={formik.handleBlur("firstname")}
              />
              <div className="error">
                {formik.touched.firstname && formik.errors.firstname}
              </div>
              <label
                htmlFor="email"
                className="text-white text-xl"
              >{`<Email/>`}</label>
              <input
                type="email"
                className="register-contact"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>

              <label
                htmlFor="year"
                className="text-white text-xl "
              >{`<Year/>`}</label>
              <input
                type="number"
                className="register-contact"
                name="year"
                value={formik.values.year}
                onChange={formik.handleChange("year")}
                onBlur={formik.handleBlur("year")}
              />
              <div className="error">
                {formik.touched.year && formik.errors.year}
              </div>
              <label
                htmlFor="domain"
                className="text-white text-xl "
              >{`<Select Domain/>`}</label>
              <input
                type="text"
                className="register-contact"
                name="domain"
                value={formik.values.domain}
                onChange={formik.handleChange("domain")}
                onBlur={formik.handleBlur("domain")}
              />
              <div className="error">
                {formik.touched.domain && formik.errors.domain}
              </div>
            </div>
            <div className="right w-[50%] h-full">
              <label
                htmlFor="lastname"
                className="text-white text-xl"
              >{`<Lastname/>`}</label>
              <input
                type="text"
                className="register-contact"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange("lastname")}
                onBlur={formik.handleBlur("lastname")}
              />
              <div className="error">
                {formik.touched.lastname && formik.errors.lastname}
              </div>
              <label
                htmlFor="mobile"
                className="text-white text-xl"
              >{`<Mobile No/>`}</label>
              <input
                type="number"
                className="register-contact"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange("mobile")}
                onBlur={formik.handleBlur("mobile")}
              />
              <div className="error">
                {formik.touched.mobile && formik.errors.mobile}
              </div>

              <label
                htmlFor="branch"
                className="text-white text-xl"
              >{`<Branch/>`}</label>
              <input
                type="branch"
                className="register-contact"
                name="branch"
                value={formik.values.branch}
                onChange={formik.handleChange("branch")}
                onBlur={formik.handleBlur("branch")}
              />
              <div className="error">
                {formik.touched.branch && formik.errors.branch}
              </div>

              <label
                htmlFor="github"
                className="text-white text-xl "
              >{`<Github Username/>`}</label>
              <input
                type="text"
                className="register-contact"
                name="github"
                value={formik.values.github}
                onChange={formik.handleChange("github")}
                onBlur={formik.handleBlur("github")}
              />
              <div className="error">
                {formik.touched.github && formik.errors.github}
              </div>
            </div>
          </div>
          <button
            className="mx-auto "
            style={{
              background: "#00CF6B",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "white",
              margin: "0 30px",
              width: "50%",
              fontSize: "20px",
              marginBottom :"40px"
            }}
          >{`<SEND/>`}</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
