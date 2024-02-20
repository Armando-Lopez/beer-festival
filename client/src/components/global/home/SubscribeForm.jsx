import React from "react";
import AppModal from "../AppModal";
import { useState } from "react";
import axios from "axios";
import { SUBCRIBE_EMAIL_API_URL } from "../../../constants/api";

export const SubscribeForm = () => {
  const initForm = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    province: "",
  };
  const [form, setForm] = useState(initForm);

  function handleInput(ev) {
    const { name, value } = ev.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    axios
      .post(SUBCRIBE_EMAIL_API_URL, { ...form })
      .then((response) => {
        setResult(response.data);
        setForm(initForm);
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Try again later willl",
        });
      });
  };

  return (
    <AppModal
      styleModal="bg-cream-bf md:px-24"
      activator={
        <button className="uppercase mt-9 w-full md:w-40 bg-yellow-bf text-xl font-bebas h-12 my-auto grid place-items-center text-coffee-bf rounded-lg border-[1px] border-cream-bf">
          Stay Updated
        </button>
      }
    >
      <div className="pb-3">
        {result && (
          <p className={`pt-14 ${result.success ? "success" : "error"}`}>
            {result.message}
          </p>
        )}
        <h2 className="uppercase text-[40px] font-bebas font-bold text-coffee-bf mb-4 mt-10 md:mt-7">
          Form Fieldss
        </h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="app-input">
            <label htmlFor="firstName">
              <span className="app-input__label required">First name</span>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="app-input__text"
                required
                minLength="3"
                value={form.firstName}
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="app-input">
            <label htmlFor="lastName">
              <span className="app-input__label required">Last name</span>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                minLength="3"
                className="app-input__text"
                value={form.lastName}
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="app-input">
            <label htmlFor="email">
              <span className="app-input__label required">Email</span>
              <input
                type="email"
                name="email"
                id="email"
                required
                minLength="10"
                className="app-input__text"
                value={form.email}
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="app-input">
            <label htmlFor="city">
              <span className="app-input__label required">City</span>
              <input
                type="text"
                name="city"
                id="city"
                required
                minLength="2"
                className="app-input__text"
                value={form.city}
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="app-input">
            <label htmlFor="province">
              <span className="app-input__label required">Province</span>
              <input
                type="text"
                name="province"
                id="province"
                required
                minLength="2"
                className="app-input__text"
                value={form.province}
                onChange={handleInput}
              />
            </label>
          </div>
          <button className="uppercase my-9 w-full bg-orange-bf text-xl font-bebas h-12 grid place-items-center text-white rounded-lg border-[1px] border-cream-bf md:w-40 md:ml-auto">
            Submit
          </button>
        </form>
      </div>
    </AppModal>
  );
};
