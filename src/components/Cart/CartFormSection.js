import React, { useContext, useState } from "react";
import axios from "../../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cartContext from "../Context/cartContext";

const CartFormSection = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { cartItems, setCartItems } = useContext(cartContext);

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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

  const validateInputs = () => {
    let hasErrors = false;
    for (const [key, value] of Object.entries(data)) {
      if (value.trim() === "") {
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
        case "location":
          if (value.length < 3) {
            setErrorMessage(key, "Location must be at least 3 characters long");
            hasErrors = true;
          }
          break;
        default:
          break;
      }
    }
    return !hasErrors;
  };

  const handleClick = () => {
    if (validateInputs()) {
      handleEnquirySubmission();
    }
  };

  const handleEnquirySubmission = async () => {
    setLoading(true);
    try {
      const products = Object.values(cartItems).map((item) => ({
        name: item.Product_Details_Description,
        quantity: item.productQuantity,
      }));
      await axios.post("/EmailOnEnquiry", { ...data, products });
      toast.success("Enquiry submitted successfully!", {
        position: "top-right",
      });
      setData({
        name: "",
        company: "",
        email: "",
        phone: "",
        location: "",
      });
      handleCartClearConfirmation();
    } catch (error) {
      toast.error("Failed to submit enquiry. Please try again.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCartClearConfirmation = () => {
    if (window.confirm("Do you want to clear the cart?")) {
      localStorage.removeItem("cartItems");
      setCartItems([]);
    }
  };

  return (
    <div className="col-xl-3 col-lg-4">
      <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
        <h6 className="text-xl mb-32">Submit Your Details</h6>
        <div className="row gap-18">
          {["name", "company", "email", "phone", "location"].map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field} className="form-label">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                className="form-control"
                type="text"
                name={field}
                id={field}
                value={data[field]}
                onChange={handleDataChange}
                style={{ borderColor: errors[field] ? "red" : "#dee2e6" }}
                onFocus={handleFocus}
              />
              <p className="form-text text-danger position-absolute text-xs mt-0">
                {errors[field]}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleClick}
          className="btn btn-main mt-40 py-18 w-100 rounded-8"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </div>
    </div>
  );
};

export default CartFormSection;
