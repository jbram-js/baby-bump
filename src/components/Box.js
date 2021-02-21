import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useForm, Controller} from "react-hook-form";
import "../styles/Box.css";

const Box = () => {
  const [submittedData, setSubmittedData] = useState({});
  const {handleSubmit, register, control, errors, watch} = useForm();

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  const {setDate} = watch(["setDate"]);

  return (
    <div className="box">
      <h1>Referral form</h1>
      <p>
        Fill in the below form to refer a friend, family member or yourself for
        a little box of hope.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
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
        <div className="form-section">
          <label htmlFor="dob" className="form-label">
            Date of birth
          </label>
          <Controller
            as={
              <DatePicker
                id="dob"
                placeholderText="DD/MM/YYYY"
                dateFormat="mm-dd-yyyy"
                selectsStart
                setDate={setDate}
              />
            }
            name="dob"
            control={control}
            valueName="selected"
            ref={register({
              required: {message: "This is a required field", value: true},
            })}
          />
          {errors.dob && <span className="error">{errors.dob.message}</span>}
        </div>
        <div className="form-section">
          <label htmlFor="email" className="form-label">
            Email address
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
        <div className="form-section">
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
        <div className="form-section">
          <label htmlFor="communication" className="form-label">
            Preferred method of communication
          </label>
          <select
            id="communication"
            name="communication"
            ref={register({
              required: {
                message: "This is a required field",
                value: true,
              },
            })}
          >
            <option value="">Select...</option>
            <option value="Phone Call">Phone call</option>
            <option value="Text">Text</option>
            <option value="Email">Email</option>
          </select>
          {errors.communication && (
            <span className="error">{errors.communication.message}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Submitted data:</p>
      <pre>{JSON.stringify(submittedData, null, 2)}</pre>
    </div>
  );
};

export default Box;
