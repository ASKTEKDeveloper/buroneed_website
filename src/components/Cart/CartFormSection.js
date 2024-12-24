import React, { useContext, useState } from "react";
import axios from "../../axios";
import cartContext from "../Context/cartContext";

const CartFormSection = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
  });

  const { cartItems , setCartItems } = useContext(cartContext);

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

    if (!hasErrors) {
      EmailOnEnquiry();
    }
  };

  const EmailOnEnquiry = async () => {
    const products = Object.values(cartItems).map((item) => ({
      name: item.Product_Details_Description,
      quantity: item.productQuantity,
    }));
    const res = await axios.post("/EmailOnEnquiry", { ...data, products });
    console.log(res);
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      location: "",
    });
    localStorage.removeItem('cartItems')
    setCartItems([])
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
    <div className="col-xl-3 col-lg-4">
      <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
        <h6 className="text-xl mb-32">Submit Your Details</h6>
        <div className="row gap-18">
          <div className="form-group">
            <label htmlFor="name form-label">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handleDataChange}
              style={{ borderColor: errors.name ? "red" : "#dee2e6" }}
              onFocus={handleFocus}
            />
            <p className="form-text text-danger position-absolute text-xs mt-0">
              {errors.name}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="company form-label">Company</label>
            <input
              className="form-control"
              type="text"
              name="company"
              id="company"
              value={data.company}
              onChange={handleDataChange}
              style={{ borderColor: errors.company ? "red" : "#dee2e6" }}
              onFocus={handleFocus}
            />
            <p className="form-text text-danger position-absolute text-xs mt-0">
              {errors.company}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="email form-label">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              value={data.email}
              onChange={handleDataChange}
              style={{ borderColor: errors.email ? "red" : "#dee2e6" }}
              onFocus={handleFocus}
            />
            <p className="form-text text-danger position-absolute text-xs mt-0">
              {errors.email}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="phone form-label">Phone No</label>
            <input
              className="form-control"
              type="text"
              name="phone"
              id="phone"
              value={data.phone}
              onChange={handleDataChange}
              style={{ borderColor: errors.phone ? "red" : "#dee2e6" }}
              onFocus={handleFocus}
            />
            <p className="form-text text-danger position-absolute text-xs mt-0">
              {errors.phone}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="location form-label">Location</label>
            <input
              className="form-control"
              type="text"
              name="location"
              id="location"
              value={data.location}
              onChange={handleDataChange}
              style={{ borderColor: errors.location ? "red" : "#dee2e6" }}
              onFocus={handleFocus}
            />
            <p className="form-text text-danger position-absolute text-xs mt-0">
              {errors.location}
            </p>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="btn btn-main mt-40 py-18 w-100 rounded-8"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartFormSection;
