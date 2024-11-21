import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <h1>This is the articles</h1>;
      <Outlet />
    </>
  );
};
export default Dashboard;
