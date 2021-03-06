import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {useForm, Controller} from "react-hook-form";
import "../styles/Box.css";
import {init, sendForm} from "emailjs-com";
init("user_UJZWlkJrwfOaaqvPbKAZa");

const Box = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Message");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const preloadedValues = {
    babiesAge: "N/A",
  };

  const {register, handleSubmit} = useForm({
    defaultValues: preloadedValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    const statusMessage = document.querySelector(".status-message");
    const form = document.querySelector("#box-of-hope");
    generateContactNumber();

    sendForm("default_service", "box_of_hope", "#box-of-hope").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      }
    );
  };

  return (
    <div className="box">
      <h1>Referral form</h1>
      <p>
        Fill in the below form to refer a friend, family member or yourself for
        a little box of hope.
      </p>
      <p className="status-message">{statusMessage}</p>
      <form id="box-of-hope" onSubmit={handleSubmit(onSubmit)}>
        <div className="box-form-section">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required={true}
            ref={register}
          />
        </div>
        <div className="box-form-section">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="text"
            required={true}
            ref={register}
          />
        </div>
        <div className="box-form-section">
          <label htmlFor="phone" className="form-label">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="number"
            required={true}
            ref={register}
          />
        </div>
        <div className="box-form-section">
          <label htmlFor="date_of_birth" className="form-label">
            Date of birth
          </label>
          <input
            id="date_of_birth"
            name="date_of_birth"
            type="text"
            required={true}
            ref={register}
          />
        </div>
        <div className="box-form-section">
          <label htmlFor="communication" className="form-label">
            Preferred method of communication
          </label>
          <select
            id="communication"
            name="communication"
            required={true}
            ref={register}
          >
            <option value="">Select...</option>
            <option value="Phone Call">Phone call</option>
            <option value="Text">Text</option>
            <option value="Email">Email</option>
          </select>
        </div>
        <h1>Your pregnancy</h1>
        <div className="box-form-section">
          <label htmlFor="due_date" className="form-label">
            Due date (where applicable)
          </label>
          <input
            id="due_date"
            name="due_date"
            type="text"
            required={true}
            ref={register}
          />
        </div>
        <div className="box-form-section">
          <label htmlFor="babies_age" className="form-label">
            Babies age (where applicable)
          </label>
          <input id="babies_age" name="babies_age" type="text" ref={register} />
        </div>
        <div className="box-form-section">
          <label htmlFor="midwife" className="form-label">
            Named midwife
          </label>
          <input
            id="midwife"
            name="midwife"
            type="text"
            required={true}
            ref={register}
          />
        </div>
        <div className="box-form-section">
          <label htmlFor="referral" className="form-label">
            Referral type
          </label>
          <select id="referral" name="referral" required={true} ref={register}>
            <option value="">Select...</option>
            <option value="Professional">Professional</option>
            <option value="Friend">Friend</option>
            <option value="Family member">Family member</option>
            <option value="Self">Self</option>
          </select>
        </div>
        <div className="box-form-section">
          <label htmlFor="hear_about" className="form-label">
            How did you hear about us?
          </label>
          <input
            id="hear_about"
            name="hear_about"
            type="text"
            required={true}
            ref={register}
          />
        </div>
        <input className="button" type="submit" value="Send" />
        <input type="hidden" name="contact_number" value={contactNumber} />
      </form>
    </div>
  );
};

export default Box;
