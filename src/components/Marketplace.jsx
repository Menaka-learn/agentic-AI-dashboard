import { useNavigate } from "react-router-dom";
import { agents } from "../data/agents";

function Marketplace() {
  const navigate = useNavigate();

  const handleLaunch = (id) => {
    navigate(`/agent/${id}`);
  };

  return (
    <>
      <div className="main-header">
        <h1>🤖 AI Agent Marketplace</h1>
        <p>Explore and launch available AI agents</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr))",
          gap: "20px",
        }}
      >
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="glass"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>{agent.name}</h3>

              <span
                style={{
                  background:
                    agent.status === "Active" ? "#22c55e" : "#f97316",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                {agent.status}
              </span>
            </div>

            <p>🆔 {agent.id}</p>
            <p>👥 Users: {agent.users}</p>
            <p>🏁 Team: {agent.team}</p>
            <p>🚀 Version: {agent.version}</p>

            <button
              onClick={() => handleLaunch(agent.id)}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "12px",
                background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Launch Agent
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Marketplace;