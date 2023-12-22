import React, { useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let Navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const user = { name, salary, company };
    console.log(user);

    axios
      .post("http://localhost:5000/employees", user)
      .then(() => {
        alert("Registered Successfully");
        Navigate("/users");
      })
      .catch((err) => {
        alert("Error");
        console.log(err);
      });
  };

  return (
    <div id={style.createUser}>
      <div id={style.myform}>
        <form onSubmit={submit}>
        <p style={{textAlign:"center"}}>Create User</p>
          <label htmlFor="Name">Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="salary">Salary</label>
          <br />
          <input
            type="text"
            placeholder="Enter salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
          <br />
          <label htmlFor="Name">Company</label>
          <br />
          <input
            type="text"
            placeholder="Enter Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
