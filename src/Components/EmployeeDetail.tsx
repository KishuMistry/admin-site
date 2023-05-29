import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const employeeDetail = {
    code: "E001",
    name: "Kishan",
    gender: "Male",
    anualSalary: 150000,
    dateofBirth: "25/05/1988",
  };
  return (
    <div>
      <h1>Employee Details Page {id}</h1>
      <div>
        Code : {employeeDetail.code}
        <br></br>
        Name : {employeeDetail.name}
        <br></br>
        gender : {employeeDetail.gender}
        <br></br>
        anualSalary : {employeeDetail.anualSalary}
        <br></br>
        dateofBirth : {employeeDetail.dateofBirth}
        <br></br>
      </div>
    </div>
  );
};

export default EmployeeDetail;
