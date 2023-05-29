import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Components/LoginPage";
import Dashboard from "../Components/Dashboard";
import EmployeeData from "../Components/EmployeeData";
import PageNotFound from "../Components/PageNotFound";
import EmployeeDetail from "../Components/EmployeeDetail";
import AddEmployee from "../Components/AddEmployee";

const AppRoutingComponents = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="employeelist" element={<EmployeeData />}></Route>
          <Route
            path="employee-detail/:id"
            element={<EmployeeDetail />}
          ></Route>
          <Route path="addEmployee" element={<AddEmployee />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutingComponents;
