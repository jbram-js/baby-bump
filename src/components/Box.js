import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useForm, Controller} from "react-hook-form";
import "../styles/Box.css";

const Box = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const {handleSubmit, register, control, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
          <label htmlFor="birthDate" className="form-label">
            Date of birth
          </label>
          <Controller
            as={DatePicker}
            control={control}
            valueName="selected"
            selected={birthDate}
            onChange={([selected]) => {
              setBirthDate(selected);
              return selected;
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            name="birthDate"
            defaultValue={null}
          />
        </div>
        <div className="form-section">
          <label htmlFor="dueDate" className="form-label">
            Due date
          </label>
          <Controller
            as={DatePicker}
            control={control}
            valueName="selected"
            selected={dueDate}
            onChange={([selected]) => {
              setDueDate(selected);
              return selected;
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            name="dueDate"
            defaultValue={null}
          />
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
    </div>
  );
};

export default Box;
