import React, {useState} from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useForm, Controller} from "react-hook-form";
import "../styles/Box.css";

const Box = () => {
  const [boxKey, setBoxKey] = useState(10);
  const preloadedValues = {
    babiesAge: "N/A",
  };
  const {handleSubmit, register, control, errors} = useForm({
    defaultValues: preloadedValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    setBoxKey(boxKey + 1);
  };

  return (
    <div className="box">
      <h1>Referral form</h1>
      <p>
        Fill in the below form to refer a friend, family member or yourself for
        a little box of hope.
      </p>
      <form key={boxKey} onSubmit={handleSubmit(onSubmit)}>
        <div className="box-form-section">
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
        <div className="box-form-section">
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
        <div className="box-form-section">
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
        <div className="box-form-section">
          <label htmlFor="birthDate" className="form-label">
            Date of birth
          </label>
          <Controller
            control={control}
            name="birthDate"
            render={({onChange, onBlur, value}) => (
              <ReactDatePicker
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
              />
            )}
          />
        </div>
        <div className="box-form-section">
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
        <h1>Your pregnancy</h1>
        <div className="box-form-section">
          <label htmlFor="dueDate" className="form-label">
            Due date (where applicable)
          </label>
          <Controller
            control={control}
            name="dueDate"
            render={({onChange, onBlur, value}) => (
              <ReactDatePicker
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
              />
            )}
          />
        </div>
        <div className="box-form-section">
          <label htmlFor="babiesAge" className="form-label">
            Babies age (where applicable)
          </label>
          <input id="babiesAge" name="babiesAge" type="text" ref={register} />
        </div>
        <div className="box-form-section">
          <label htmlFor="midwife" className="form-label">
            Named midwife
          </label>
          <input
            id="midwife"
            name="midwife"
            type="text"
            ref={register({
              required: {message: "This is a required field", value: true},
            })}
          />
          {errors.midwife && (
            <span className="error">{errors.midwife.message}</span>
          )}
        </div>
        <div className="box-form-section">
          <label htmlFor="referral" className="form-label">
            Referral type
          </label>
          <select
            id="referral"
            name="referral"
            ref={register({
              required: {
                message: "This is a required field",
                value: true,
              },
            })}
          >
            <option value="">Select...</option>
            <option value="Professional">Professional</option>
            <option value="Friend">Friend</option>
            <option value="Family member">Family member</option>
            <option value="Self">Self</option>
          </select>
          {errors.referral && (
            <span className="error">{errors.referral.message}</span>
          )}
        </div>
        <div className="box-form-section">
          <label htmlFor="hearAbout" className="form-label">
            How did you hear about us?
          </label>
          <input
            id="hearAbout"
            name="hearAbout"
            type="text"
            ref={register({
              required: {message: "This is a required field", value: true},
            })}
          />
          {errors.hearAbout && (
            <span className="error">{errors.hearAbout.message}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Box;
