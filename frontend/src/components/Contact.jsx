import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import axios from "axios";

const contactSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be Valid")
    .required("Email is Required"),
  message: yup.string().required("Message is Required"),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await contactUs(values);
        toast.success("Message Sent!");
        resetForm(); // Reset the form values
      } catch (error) {
        console.error(error); // Handle any errors
      }
    },
  });

  const contactUs = async (userData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name: userData.name,
        email: userData.email,
        message: userData.message,
      });
      toast.success("Connection Successfully!");
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  return (
    <div className="contact-section w-full  bg-black mt-[40px]">
      <h3 className="text-[#00FF84] text-3xl text-center ">{`<Contact Us/>`}</h3>
      <div className="form  h-[100%] flex justify-center items-center mobile-upper-form">
        <form
          action=""
          className="flex flex-col gap-5 justify-center  w-[50%] mobile-form"
          onSubmit={formik.handleSubmit}
        >
          <label
            htmlFor="name"
            className="text-white text-xl"
          >{`<name/>`}</label>
          <input
            type="text"
            className="contact"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>

          <label
            htmlFor="email"
            className="text-white text-xl"
          >{`<email/>`}</label>
          <input
            type="email"
            className="contact"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>

          <label
            htmlFor="message"
            className="text-white text-xl "
          >{`<Message/>`}</label>
          <textarea
            type="text"
            className="contact h-[200px]"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange("message")}
            onBlur={formik.handleBlur("message")}
          />
          <div className="error">
            {formik.touched.message && formik.errors.message}
          </div>

          <button
            className="mx-auto"
            style={{
              background: "#00CF6B",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "white",
              marginTop: "30px",
              width: "100%",
              fontSize: "22px",
            }}
          >{`<SEND/>`}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
