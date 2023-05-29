import { useState } from "react";

interface Employee {
  code: string;
  name: string;
  gender: string;
  anualSalary: number;
  dateofBirth: string;
}

const AddEmployee = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [anualSalary, setAnnualSalary] = useState(0);
  const [dateofBirth, setDateOfBirth] = useState("");

  const submit = () => {
    const employee: Employee = {
      code: code,
      name: name,
      gender: gender,
      anualSalary: anualSalary,
      dateofBirth: dateofBirth,
    };
  };

  const resetForm = () => {
    setCode("");
    setName("");
    setGender("");
    setAnnualSalary(0);
    setDateOfBirth("");
  };

  return (
    <div className="container-fluid">
      <form>
        <div className="mb-3">
          <label className="form-label">Employee Code</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setCode(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => setGender(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Annual Salary</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setAnnualSalary(Number(event.target.value))}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date Of Birth</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary m-2" onClick={submit}>
          Submit
        </button>
        <button type="button" className="btn btn-primary" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
