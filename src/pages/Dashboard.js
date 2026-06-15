import MetricCard from "./MetricCard";
import { agents } from "../data/agents";

function Dashboard() {

  const totalAgents = agents.length;

  const activeAgents =
    agents.filter(a => a.status === "Active").length;

  const devAgents =
    agents.filter(a => a.status === "Under Development").length;

  const totalUsers =
    agents.reduce((sum, a) => sum + a.users, 0);

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="row">

        <div className="col">
          <MetricCard
            title="Total Agents"
            value={totalAgents}
          />
        </div>

        <div className="col">
          <MetricCard
            title="Active Agents"
            value={activeAgents}
          />
        </div>

        <div className="col">
          <MetricCard
            title="Development"
            value={devAgents}
          />
        </div>

        <div className="col">
          <MetricCard
            title="Users"
            value={totalUsers}
          />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;