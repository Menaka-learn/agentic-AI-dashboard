import { useParams } from "react-router-dom";
import { agents } from "../data/agents";

function AgentDetails() {
  const { id } = useParams();

  // ✅ Safe match (prevents "Agent not found" due to case issues)
  const agent = agents.find(
    (a) => a.id.toLowerCase() === id?.toLowerCase()
  );

  // ❌ Fallback UI
  if (!agent) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>❌ Agent not found</h2>
        <p><b>Requested ID:</b> {id}</p>
        <p>Check if the ID in URL matches your agents.js file exactly.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>

      {/* HEADER */}
      <h1 style={{ marginBottom: "10px" }}>
        🤖 {agent.name}
      </h1>

      <p style={{ opacity: 0.7 }}>
        ID: {agent.id} | Team: {agent.team}
      </p>

      <hr style={{ margin: "20px 0" }} />

      {/* SECTION 1 */}
      <h3>🧩 Problem it solves</h3>
      <p>{agent.problem}</p>

      <br />

      {/* SECTION 2 */}
      <h3>⚙️ How it works</h3>
      <p>{agent.howItWorks}</p>

      <br />

      {/* SECTION 3 */}
      <h3>👨‍💻 Developed by</h3>
      <p>{agent.developedBy}</p>

      <br />

      {/* SECTION 4 */}
      <h3>🌍 Where it is used</h3>
      <p>{agent.usage}</p>

      <br />

      {/* SECTION 5 */}
      <h3>📈 Impact & Benefits</h3>
      <p>{agent.impact}</p>

      <br />

      {/* SECTION 6 */}
      <h3>📊 Usage Metrics</h3>
      <div style={{ paddingLeft: "10px" }}>
        <p>👥 Users: {agent.metrics?.users}</p>
        <p>⚡ Activity: {agent.metrics?.tasks || agent.metrics?.detections}</p>
        <p>🎯 Accuracy: {agent.metrics?.accuracy}</p>
      </div>

      <br />

      {/* STATUS BADGE */}
      <div>
        <span
          style={{
            padding: "6px 12px",
            borderRadius: "20px",
            background:
              agent.status === "Active" ? "#22c55e" : "#f97316",
            color: "white",
            fontSize: "12px",
          }}
        >
          {agent.status}
        </span>
      </div>

    </div>
  );
}

export default AgentDetails;