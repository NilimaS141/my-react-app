import { useLocation } from "react-router";

function Dashboard() {
  const { state } = useLocation();
  console.log(state.username);
  console.log(state.password);
  return (
    <div>
      <h1>Dashboard page</h1>
      <h2>Welcome {state.username}</h2>
    </div>
  );
}
export default Dashboard;
