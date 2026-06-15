import { useState } from "react";

function AdminPanel() {

  const [agentName, setAgentName] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `${agentName} registered successfully`
    );

    setAgentName("");
  };

  return (
    <div className="admin-container">

      <div className="main-header">
        <h1>🔐 Admin Console</h1>
        <p>
          Manage AI Agents and System
          Configuration
        </p>
      </div>

      <div className="admin-grid">

        <div
          className="admin-card"
          style={{
            background:
              "linear-gradient(135deg,#3b82f6,#06b6d4)"
          }}
        >
          <h2>12</h2>
          <p>Total Agents</p>
        </div>

        <div
          className="admin-card"
          style={{
            background:
              "linear-gradient(135deg,#22c55e,#14b8a6)"
          }}
        >
          <h2>8</h2>
          <p>Active Agents</p>
        </div>

        <div
          className="admin-card"
          style={{
            background:
              "linear-gradient(135deg,#f97316,#ef4444)"
          }}
        >
          <h2>4</h2>
          <p>Pending Requests</p>
        </div>

      </div>

      <div className="admin-form">

        <h2>
          ➕ Register New Agent
        </h2>

        <form onSubmit={handleSubmit}>

          <label>
            Agent Name
          </label>

          <input
            value={agentName}
            onChange={(e) =>
              setAgentName(e.target.value)
            }
            placeholder="Developer Agent"
          />

          <label>
            Team
          </label>

          <select>
            <option>McLaren</option>
            <option>Challengers</option>
          </select>

          <label>
            Version
          </label>

          <input
            placeholder="v1.0"
          />

          <button type="submit">
            🚀 Register Agent
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminPanel;