import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let {id}=useParams();
  let Navigate = useNavigate();



  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        setName(res.data.name);
        setSalary(res.data.salary);
        setCompany(res.data.company);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id])
  

  const submit = (e) => {
    e.preventDefault();
    const user = { id,name, salary, company };
    console.log(user);

    axios
      .put(`http://localhost:5000/employees/${id}`, user)
      .then(() => {
        alert("Update Successfully");
        Navigate("/users");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id={style.createUser}>
      <div id={style.myform}>
        
        <form onSubmit={submit}>
        <p style={{textAlign:"center"}}>Update User</p>
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
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
