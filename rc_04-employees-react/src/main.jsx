import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "David Hardy",
      email: "thomashardy@gmail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
    },
  ]);

  const [title, setTitle] = useState("Default Title")





  return (
    <div className="container">
      <div className="table-wrapper">
        <Header title={title} />
        <EmployeeList employees={employees} />
      </div>
    </div>
  );
}

function Header({title}) {
  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>
            Manage <b>Employees</b>
          </h2>
        </div>
        <div className="col-sm-6">

    
          <a
            href="#addEmployeeModal"
            className="btn btn-success"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE147;</i>
            <span>Add New Employee</span>
          </a>
          <a
            href="#deleteEmployeeModal"
            className="btn btn-danger"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE15C;</i> <span>Delete</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function EmployeeList({ employees }) {
  // console.log("emp", employees);
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="selectAll"
                // checked = {employees.length > 0 && selectedEmployees.length == employees.length}
                // onChange={toggleSelectAll}
              />
              <label htmlFor="selectAll"></label>
            </span>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </tbody>
    </table>
  );
}

function EmployeeItem({ employee }) {
  // console.log("employee", employee);
  return (
    <tr>
      <td>
        <span className="custom-checkbox">
          <input
            type="checkbox"
            id="checkbox1"
            onChange={() => onToggleSelect(employee.id)}
          />
          <label htmlFor="checkbox1"></label>
        </span>
      </td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}A</td>
      <td>{employee.phone}</td>
      <td>{employee.gender}</td>
      <td>{employee.department}</td>
      <td>
        <a className="edit">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </a>
        <a className="delete">
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </a>
      </td>
    </tr>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
