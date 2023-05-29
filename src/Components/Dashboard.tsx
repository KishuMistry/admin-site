import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("isAuth");
    navigate("/");
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary m-2"
        onClick={() => navigate("/employeelist")}
      >
        Display Employees Details
      </button>
      <button type="button" className="btn btn-success" onClick={logout}>
        Sign Off
      </button>
    </div>
  );
};

export default Dashboard;
