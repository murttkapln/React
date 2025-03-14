import { useState } from "react";
import Header from "./components/Header"
import EmployeeList from "./components/EmployeeList"
import AddEmployeModal from "./components/AddEmployeeModal"


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

  function addEmployee(newEmployee) {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      {
        ...newEmployee,
        id: Math.max(...prevEmployees.map((emp) => emp.id), 0) + 1,
      },
    ]);
  }

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="container">
      <div className="table-wrapper">
        <Header onOpenAddModal={() => setIsAddModalOpen(true)} />
        <EmployeeList employees={employees} />
        <AddEmployeModal
          isOpen={isAddModalOpen}
          onCloseAddModal={() => setIsAddModalOpen(false)}
          onAddEmployee={addEmployee}
        />
      </div>
    </div>
  );
}

export default App;
