import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Marketplace from "./components/Marketplace";
import AdminPanel from "./components/AdminPanel";
import MonitoringDashboard from "./components/MonitoringDashboard";
import AgentDetails from "./components/AgentDetails"; // ✅ ADD THIS

function App() {
  return (
    <BrowserRouter>

      <div className="layout">

        <Sidebar />

        <div className="content">

          <Routes>

            {/* Home */}
            <Route path="/" element={<Dashboard />} />

            {/* Marketplace */}
            <Route path="/marketplace" element={<Marketplace />} />

            {/* 🔥 NEW: Agent details page */}
            <Route path="/agent/:id" element={<AgentDetails />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminPanel />} />

            {/* Monitoring */}
            <Route path="/monitoring" element={<MonitoringDashboard />} />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;