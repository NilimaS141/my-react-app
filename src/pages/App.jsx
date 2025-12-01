import { Route, Routes, useLocation } from "react-router";
import Dashboard from "./DashboardPage";
import Login from "./LoginPage";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

function App() {
  const Location = useLocation();
  const isLoginPage = Location.pathname === "/";
  return (
    // <div style={{ display: "flex" }}>
    //   {!isLoginPage && <NavBar />}

    //   <div style={{ flex: 1 }}>
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //     </Routes>
    //   </div>
    // </div>
    <div style={{ display: "flex", height: "100vh" }}>
      {!isLoginPage && <NavBar />}

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {!isLoginPage && <TopBar />}

        <div style={{ padding: "20px", overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
