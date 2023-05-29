import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate("/employee-detail/e001");
  };

  const gotoAddUser = () => {
    navigate("/addEmployee");
  };

  const employees = [
    {
      code: "E001",
      name: "Kishan",
      gender: "Male",
      anualSalary: 150000,
      dateofBirth: "25/05/1988",
    },
    {
      code: "E002",
      name: "Nirin",
      gender: "Male",
      anualSalary: 2500000,
      dateofBirth: "09/09/1980",
    },
    {
      code: "E003",
      name: "Ashish",
      gender: "Male",
      anualSalary: 108900,
      dateofBirth: "2/07/1980",
    },
    {
      code: "E004",
      name: "Katrina",
      gender: "Female",
      anualSalary: 89000,
      dateofBirth: "12/11/1980",
    },
    {
      code: "E005",
      name: "Kamal",
      gender: "Male",
      anualSalary: 90000,
      dateofBirth: "9/6/1991",
    },
  ];

  return (
    <div>
      <h1>List of employees are given below</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Emp Id</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Annual Salary</th>
            <th scope="col">Date of Birth</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <>
              <tr>
                <th scope="row">{index}</th>
                <td>{employee.code}</td>
                <td>{employee.name}</td>
                <td>{employee.gender}</td>
                <td>{employee.anualSalary}</td>
                <td>{employee.dateofBirth}</td>
                <td>
                  <button type="button" onClick={goToDetailPage}>
                    View Details
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <center>
        <button className="btn btn-warning" onClick={gotoAddUser}>
          Add New User
        </button>
      </center>
    </div>
  );
};

export default EmployeeList;
