import { useLocation } from "react-router";
import StatWidget from "./StatWidget";
import ActivityWidget from "./ActivityWidget";
import ChartWidget from "./ChartWidget";
import "../css/Dashboard.css";

function Dashboard() {
  const { state } = useLocation();
  console.log(state.username);
  console.log(state.password);
  return (
    <div className="padding20">
      <h1 className="heading">Dashboard page</h1>
      <h4 className="textsmall">Welcome {state.username}</h4>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StatWidget
          title="Revenue"
          value="$45,000"
          icon="💰"
          bgColor="#dbeafe"
        />
        <StatWidget
          title="Performance"
          value="50%"
          icon="📈"
          bgColor="#dbeafe"
        />
        <StatWidget
          title="Total Orders"
          value="200"
          icon="📦"
          bgColor="#dbeafe"
        />
        <StatWidget
          title="Total Users"
          value="120"
          icon="👥"
          bgColor="#dbeafe"
        />
        <StatWidget
          title="New Requests"
          value="30"
          icon="📥"
          bgColor="#dbeafe"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <ChartWidget
          title="Sales Overview"
          data={[
            { name: "Jan", value: 30 },
            { name: "Feb", value: 50 },
            { name: "Mar", value: 20 },
            { name: "Apr", value: 40 },
            { name: "May", value: 50 },
            { name: "June", value: 70 },
            { name: "July", value: 60 },
            { name: "Aug", value: 50 },
            { name: "Sept", value: 80 },
            { name: "Oct", value: 100 },
            { name: "Nov", value: 70 },
            { name: "Dec", value: 90 },
          ]}
        />
        <ActivityWidget
          title="Recent Activities"
          items={[
            "User logged in",
            "3 new orders",
            "Payment completed",
            "New user registered",
            "Order #1234 delivered",
            "Invoice generated",
            "Subscription renewed",
            "Profile updated",
            "Refund processed",
            "Weekly summary sent",
          ]}
        />
      </div>
    </div>
  );
}
export default Dashboard;
