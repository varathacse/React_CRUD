import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const YourComponent = () => {
  const [emp, setEmp] = useState([]);
  let [del,setDel]=useState(false)
  let Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        setEmp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [del]);

  let deleteUser = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        alert("Employee delete successfully");
        setDel(!del);
      })
      .catch((err) => {
        console.log(err);
      });

   
  };
  let edit=(id)=>{
    Navigate(`/update-user/${id}`)
  }

  return (
    <div id={style.userPage}>
      {emp.length===0? "No Record Present":<>
      {emp.map((e) => {
        return (
          <div id={style.userCard} key={e.id}>
            <table>
              <tbody>
                <tr>
                  <td>Id</td>
                  <td>:</td>
                  <td> {e.id}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{e.name}</td>
                </tr>
                <tr>
                  <td>Salary</td>
                  <td>:</td>
                  <td>{e.salary}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>:</td>
                  <td>{e.company}</td>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <button onClick={()=>{edit(e.id)}} >Edit</button>
                  </td>
                  <td></td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        deleteUser(e.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}</>}
    </div>
  );
};

export default YourComponent;
