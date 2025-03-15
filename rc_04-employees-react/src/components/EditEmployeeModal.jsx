import { useEffect, useState } from "react";

function EditEmployeeModal({
  isOpen,
  employee,
  onCloseEditModal,
  onEditEmployee,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    gender: "",
    department: "",
  });

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, [employee]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onEditEmployee(formData);
    onCloseEditModal();
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      gender: "",
      department: "",
    });
  }

  function handleCancel() {
    onCloseEditModal();
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      gender: "",
      department: "",
    });
  }

  console.log("employe:", employee);

  if (!isOpen) return null;
  return (
    <>
      <div id="employeeModal" className="modal fade show">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Edit Employee</h4>
                <button
                  onClick={onCloseEditModal}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    className="form-control"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <div>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Department
                      </option>
                      <option value="Finance">Finance</option>
                      <option value="HR">HR</option>
                      <option value="Development">Development</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backgrop fade show"></div>
    </>
  );
}

export default EditEmployeeModal;
