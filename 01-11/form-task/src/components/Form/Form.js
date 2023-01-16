import './Form.css';
import { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneAreaCode, setAreaCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [information, setInformation] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setInformation((prevInformation) => [
      ...prevInformation,
      { firstName, lastName, companyName, email, phoneAreaCode, phoneNumber, subject },
    ]);
    console.log(information);
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <div className="form-title">EVENT REGISTARTION FORM</div>
      <div className="name-div">
        <label>Name</label>
        <div className="span-align">
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
          <span>First name</span>
        </div>
        <div className="span-align">
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          <span>Last name</span>
        </div>
      </div>

      <div className="company-div">
        <label>Company</label>
        <input type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
      </div>

      <div className="company-div">
        <label>Email</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>

      <div className="phone-div">
        <label>Phone</label>
        <div className="span-align">
          <input
            className="area-code"
            type="text"
            value={phoneAreaCode}
            onChange={(event) => setAreaCode(event.target.value)}
          />
          <span>Area code</span>
        </div>
        <div className="span-align">
          <input
            className="phone-num"
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <span>Phone number</span>
        </div>
      </div>

      <div className="subject-div">
        <label>Subject</label>
        <select value={subject} onChange={(event) => setSubject(event.target.value)}>
          <option>Choose option</option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="option 4">option 4</option>
        </select>
      </div>

      <div>
        <label>Are you an existing customer?</label>
        <div>
          <input type="radio" value="Yes" />
          Yes
          <input type="radio" value="No" />
          No
        </div>
      </div>

      <button>Register</button>
    </form>
  );
};
export default Form;
