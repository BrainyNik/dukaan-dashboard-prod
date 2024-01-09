import SideMenu from "./Sidebar/SideMenu";
import './dashboard.css'
import DashboardPage from "./DashboardPage/DashboardPage";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
        <div>
          <SideMenu />
        </div>
      
      <div><DashboardPage/></div>

      
    </div>
  );
};

export default Dashboard;
