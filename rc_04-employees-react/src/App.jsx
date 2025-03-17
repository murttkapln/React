import { useEffect, useState } from "react";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import EditEmployeeModal from "./components/EditEmployeeModal";
import AddEmployeModal from "./components/AddEmployeeModal";
function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "David Hardy",
      email: "thomashardy@gmail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
    },
    {
      id: 2,
      name: "Ricardo Querasma",
      email: "ricarddy@gmail.com",
      address: "89 rico Rd, Portland, USA",
      phone: "(171) 555-2234",
    },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  function addEmployee(newEmployee) {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      {
        ...newEmployee,
        id: Math.max(...prevEmployees.map((emp) => emp.id), 0) + 1,
      },
    ]);
  }

  function editClick(employee) {
    setIsEditModalOpen(true);
    setSelectedEmployee(employee);
  }

  function editEmployee(updatedEmployee) {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  }

  function deleteClick(employee) {
    console.log("deleted employee", employee);
    const confirmed = window.confirm("Do you want to delete this employee?");

    if (confirmed) {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((emp) => emp.id !== employee.id)
      );
    }
  }

  function deleteSelectedEmployees() {
    const confirmed = window.confirm("Do you want to delete the employee?");
    if (confirmed) {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((emp) => !selectedEmployees.includes(emp.id))
      );
    }
  }

  return (
    <div className="container">
      <div className="table-wrapper">
        <Header
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onDeleteSelected={deleteSelectedEmployees}
        />
        <EmployeeList
          employees={employees}
          onEditClick={editClick}
          onDeleteClick={deleteClick}
          selectedEmployees={selectedEmployees}
          setSelectedEmployees={setSelectedEmployees}
        />
        <AddEmployeModal
          isOpen={isAddModalOpen}
          onCloseAddModal={() => setIsAddModalOpen(false)}
          onAddEmployee={addEmployee}
        />
        <EditEmployeeModal
          isOpen={isAEditModalOpen}
          employee={selectedEmployee}
          onCloseEditModal={() => {
            setIsEditModalOpen(false), setSelectedEmployee(null);
          }}
          onEditEmployee={editEmployee}
        />
      </div>
    </div>
  );
}

export default App;
