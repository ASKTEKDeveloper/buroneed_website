import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message:""
  });
  const [errors, setErrors] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",

  });

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    let hasErrors = false;
    for (const [key, value] of Object.entries(data)) {
      if (value === "") {
        setErrorMessage(key, `${key} cannot be empty`);
        hasErrors = true;
        continue;
      }
      switch (key) {
        case "name":
          if (!/^[a-zA-Z\s]+$/.test(value)) {
            setErrorMessage(key, "Name can only contain letters and spaces");
            hasErrors = true;
          }
          break;
        case "company":
          if (value.length < 2) {
            setErrorMessage(
              key,
              "Company name must be at least 2 characters long"
            );
            hasErrors = true;
          }
          break;
        case "email":
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setErrorMessage(key, "Invalid email format");
            hasErrors = true;
          }
          break;
        case "phone":
          if (!/^\d{10}$/.test(value)) {
            setErrorMessage(key, "Phone number must be 10 digits");
            hasErrors = true;
          }
          break;
        default:
          break;
      }
    }

    if (!hasErrors) {
      EmailOnEnquiry();
    }
  };

  const EmailOnEnquiry = async () => {
    const res = await axios.post("/EmailOnEnquiryForm", { ...data });
    console.log(res);
  };

  const setErrorMessage = (name, message) => {
    setErrors((prevErrors) => ({ ...prevErrors, [name]: message }));
    setTimeout(() => {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }, 4000);
  };

  const handleFocus = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <section className="contact py-80">
      <div className="container container-lg">
        <div className="row gy-5">
          <div className="col-lg-8">
            <div className="contact-box border border-gray-100 rounded-16 px-24 py-40">
              <form action="#">
                <h6 className="mb-32">Make Custom Request</h6>
                <div className="row gy-4">
                  <div className="col-sm-6 col-xs-6">
                    <label
                      htmlFor="name"
                      className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                    >
                      Full Name{" "}
                      <span className="text-danger text-xl line-height-1">
                        *
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      className="common-input px-16"
                      id="name"
                      name="name"
                      placeholder="Full name"
                      value={data.name}
                      onChange={handleDataChange}
                      onFocus={handleFocus}
                    />
                    <p className="form-text text-danger position-absolute text-xs mt-0">
                      {errors.name}
                    </p>
                  </div>
                  <div className="col-sm-6 col-xs-6">
                    <label
                      htmlFor="email"
                      className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                    >
                      Email Address{" "}
                      <span className="text-danger text-xl line-height-1">
                        *
                      </span>{" "}
                    </label>
                    <input
                      type="email"
                      className="common-input px-16"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      value={data.email}
                      onChange={handleDataChange}
                      onFocus={handleFocus}
                    />
                    <p className="form-text text-danger position-absolute text-xs mt-0">
                      {errors.email}
                    </p>
                  </div>
                  <div className="col-sm-6 col-xs-6">
                    <label
                      htmlFor="phone"
                      className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                    >
                      Phone Number
                      <span className="text-danger text-xl line-height-1">
                        *
                      </span>{" "}
                    </label>
                    <input
                      type="number"
                      className="common-input px-16"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number*"
                      value={data.phone}
                      onChange={handleDataChange}
                      onFocus={handleFocus}
                    />
                     <p className="form-text text-danger position-absolute text-xs mt-0">
              {errors.phone}
            </p>
                  </div>
                  <div className="col-sm-6 col-xs-6">
                    <label
                      htmlFor="company"
                      className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                    >
                      Company
                      <span className="text-danger text-xl line-height-1">
                        *
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      className="common-input px-16"
                      id="company"
                      name="company"
                      placeholder="Subject"
                      onChange={handleDataChange}
                      onFocus={handleFocus}
                    />
                     <p className="form-text text-danger position-absolute text-xs mt-0"> {errors.company}
            </p>
                  </div>
                  <div className="col-sm-12">
                    <label
                      htmlFor="message"
                      className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                    >
                      Message
                    </label>
                    <textarea
                      className="common-input px-16"
                      id="message"
                      name="message"
                      placeholder="Type your message"
                      defaultValue={""}
                      value={data.message}
                      onChange={handleDataChange}
                      onFocus={handleFocus}
                      max={100}
                    />
                  </div>
                  <div className="col-sm-12 mt-32">
                    <button
                      type="button"
                      onClick={handleClick}
                      className="btn btn-main py-18 px-32 rounded-8"
                    >
                      Get Enqiury
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-box border border-gray-100 rounded-16 px-24 py-40">
              <h6 className="mb-48">Get In Touch</h6>
              <div className="flex-align gap-16 mb-16">
                <span className="w-40 h-40 flex-center rounded-circle border border-gray-100 text-main-two-600 text-2xl flex-shrink-0">
                  <i className="ph-fill ph-phone-call" />
                </span>
                <Link
                  to="/tel:+00123456789"
                  className="text-md text-gray-900 hover-text-main-600"
                >
                  +00 123 456 789
                </Link>
              </div>
              <div className="flex-align gap-16 mb-16">
                <span className="w-40 h-40 flex-center rounded-circle border border-gray-100 text-main-two-600 text-2xl flex-shrink-0">
                  <i className="ph-fill ph-envelope" />
                </span>
                <Link
                  to="/mailto:support24@marketpro.com"
                  className="text-md text-gray-900 hover-text-main-600"
                >
                  support24@marketpro.com
                </Link>
              </div>
              <div className="flex-align gap-16 mb-0">
                <span className="w-40 h-40 flex-center rounded-circle border border-gray-100 text-main-two-600 text-2xl flex-shrink-0">
                  <i className="ph-fill ph-map-pin" />
                </span>
                <span className="text-md text-gray-900 ">
                  789 Inner Lane, California, USA
                </span>
              </div>
            </div>
            <div className="mt-24 flex-align flex-wrap gap-16">
              <Link
                to="#"
                className="bg-neutral-600 hover-bg-main-600 rounded-8 p-10 px-16 flex-between flex-wrap gap-8 flex-grow-1"
              >
                <span className="text-white fw-medium">
                  Get Support On Call
                </span>
                <span className="w-36 h-36 bg-main-600 rounded-8 flex-center text-xl text-white">
                  <i className="ph ph-headset" />
                </span>
              </Link>
              <Link
                to="#"
                className="bg-neutral-600 hover-bg-main-600 rounded-8 p-10 px-16 flex-between flex-wrap gap-8 flex-grow-1"
              >
                <span className="text-white fw-medium">Get Direction</span>
                <span className="w-36 h-36 bg-main-600 rounded-8 flex-center text-xl text-white">
                  <i className="ph ph-map-pin" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;