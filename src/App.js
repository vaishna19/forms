import React, { useState } from 'react';
import './App.css';
const MultipleInputs = () => {
  const [registration, userRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    school: "",
    college: "",
    location: ""
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    userRegistration({ ...registration, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...registration, id: new Date().getTime().toString() }
    setRecords([...records, newRecord]);
    userRegistration({ username: "", email: "", phone: "", password: "" })
  }
  return (
    <div className="forms">
      <h1>Application Form</h1>
      <form action="" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" autoComplete="off" value={registration.username} onChange={handleInput} name="username" id="username" />
        </div><br></br>
        <div>
          <label htmlFor="Email">Email:</label>
          <input type="text" autoComplete="off" value={registration.email} onChange={handleInput} name="email" id="email" />
        </div><br></br>
        <div>
          <label htmlFor="phone">phone:</label>
          <input type="number" autoComplete="off" value={registration.phone} onChange={handleInput} name="phone" id="phone" />
        </div><br></br>
        <div>
          <label htmlFor="password">password:</label>
          <input type="password" autoComplete="off" value={registration.password} onChange={handleInput} name="password" id="password" />
        </div><br></br>
        <div>
          <label htmlFor="school">School:</label>
          <input type="text" autoComplete="off" value={registration.School} onChange={handleInput} name="School" id="School" />
        </div><br></br>
        <div>
          <label htmlFor="college">college:</label>
          <input type="text" autoComplete="off" value={registration.college} onChange={handleInput} name="college" id="college" />
        </div><br></br>
        <div>
          <label htmlFor="location">location:</label>
          <input type="text" autoComplete="off" value={registration.location} onChange={handleInput} name="location" id="location" />
        </div><br></br>
        <button type="submit" className="button">Registration</button>
        <div>
          {
            records.map((currEle) => {
              const { id, username, email, phone, password, school, college, location } = currEle;
              return (
                <div className="showDatas" key={currEle.id}>
                  <p>{currEle.username}</p>
                  <p>{currEle.email}</p>
                  <p>{currEle.phone}</p>
                  <p>{currEle.password}</p>
                  <p>{currEle.school}</p>
                  <p>{currEle.college}</p>
                  <p>{currEle.location}</p>
                </div>
              )
            })
          }
        </div>
      </form>
    </div>
  )
}
export default MultipleInputs