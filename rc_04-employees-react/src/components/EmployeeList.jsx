import EmployeeItem from "./EmployeeItem";

function EmployeeList({
  employees,
  onEditClick,
  onDeleteClick,
  selectedEmployees,
  setSelectedEmployees,
}) {
  // console.log("emp", employees);

  function toggleSelectAll(event) {
    if (event.target.checked) {
      setSelectedEmployees(employees.map((emp) => emp.id));
    } else {
      setSelectedEmployees([]);
    }
  }

  function toggleSelectEmployee(employeeId) {
    setSelectedEmployees((prevSelected) =>
      prevSelected.includes(employeeId)
        ? prevSelected.filter((id) => id !== employeeId)
        : [...prevSelected, employeeId]
    );
  }

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="selectAll"
                checked={
                  employees.lenght > 0 &&
                  selectedEmployees.lenght == employees.lenght
                }
                onChange={toggleSelectAll}
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
          <EmployeeItem
            key={employee.id}
            employee={employee}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
            isSelected={selectedEmployees.includes(employee.id)}
            onToggleSelect={toggleSelectEmployee}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
