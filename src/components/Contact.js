import React from "react";
import {useForm} from "react-hook-form";
import "../styles/Contact.css";

const Contact = () => {
  const {handleSubmit, register, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact">
      <h1>Get in touch</h1>
      <p>
        Could you help us out? We are always after support or volunteers, fill
        in the form below and we will be in touch.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form-section">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            ref={register({
              required: {message: "This is a required field", value: true},
            })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className="contact-form-section">
          <label htmlFor="email" className="form-label">
            Name
          </label>
          <input
            id="email"
            name="email"
            type="text"
            ref={register({
              required: {message: "This is a required field", value: true},
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <div className="contact-form-section">
          <label htmlFor="phone" className="form-label">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="number"
            ref={register({
              required: {message: "This is a required field", value: true},
            })}
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>
        <div className="contact-form-section">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            type="textarea"
            ref={register({
              required: {message: "This is a required field", value: true},
            })}
          />
          {errors.message && (
            <span className="error">{errors.message.message}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
