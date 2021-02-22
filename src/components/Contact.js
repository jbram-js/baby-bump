import React, {useState} from "react";
import Datepicker from "react-datepicker";

const Contact = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div>
      <Datepicker selected={startDate} onChange={handleChange} />
    </div>
  );
};

export default Contact;
