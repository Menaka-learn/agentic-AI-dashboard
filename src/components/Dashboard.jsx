import MetricCard from "./MetricCard";
import { agents } from "../data/agents";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

function Dashboard() {

  const totalAgents = agents.length;

  const activeAgents = agents.filter(
    a => a.status === "Active"
  ).length;

  const devAgents = agents.filter(
    a => a.status === "Under Development"
  ).length;

  const totalUsers = agents.reduce(
    (sum, a) => sum + a.users,
    0
  );

  const pieData = [
    {
      name: "McLaren",
      value: agents
        .filter(a => a.team === "McLaren")
        .reduce((sum, a) => sum + a.users, 0)
    },
    {
      name: "Challengers",
      value: agents
        .filter(a => a.team === "Challengers")
        .reduce((sum, a) => sum + a.users, 0)
    }
  ];

  const barData = [...agents]
    .sort((a, b) => b.users - a.users)
    .map(agent => ({
      name: agent.name.replace(" Agent", ""),
      users: agent.users
    }));

  const COLORS = [
    "#3b82f6",
    "#8b5cf6",
    "#06b6d4",
    "#ec4899"
  ];

  return (
    <>
      {/* Header */}

      <div className="main-header">
        <h1>🚀 DU03 AI Portal</h1>
        <p>Centralized AI Agent Dashboard</p>
      </div>

      {/* KPI Cards */}

      <div className="metric-grid">

        <MetricCard
          title="Total Agents"
          value={totalAgents}
          className="metric1"
        />

        <MetricCard
          title="Active Agents"
          value={activeAgents}
          className="metric2"
        />

        <MetricCard
          title="Development"
          value={devAgents}
          className="metric3"
        />

        <MetricCard
          title="Total Users"
          value={totalUsers}
          className="metric4"
        />

      </div>

      {/* Charts Section */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        {/* Bar Chart */}

        <div className="glass">

          <h3 style={{ color: "white" }}>
            🏆 Top AI Agents by Usage
          </h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart
              data={barData}
              layout="vertical"
              margin={{
                top: 20,
                right: 30,
                left: 50,
                bottom: 20
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.15)"
              />

              <XAxis
                type="number"
                stroke="#ffffff"
              />

              <YAxis
                type="category"
                dataKey="name"
                stroke="#ffffff"
                width={140}
              />

              <Tooltip />

              <defs>
                <linearGradient
                  id="barGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#06b6d4"
                  />

                  <stop
                    offset="100%"
                    stopColor="#8b5cf6"
                  />
                </linearGradient>
              </defs>

              <Bar
                dataKey="users"
                fill="url(#barGradient)"
                radius={[0, 10, 10, 0]}
              />

            </BarChart>
          </ResponsiveContainer>

          <p
            style={{
              textAlign: "center",
              color: "#cbd5e1",
              marginTop: "10px"
            }}
          >
            Performance Agent currently has the highest adoption.
          </p>

        </div>

        {/* Pie Chart */}

        <div className="glass">

          <h3 style={{ color: "white" }}>
            🥧 Team Distribution
          </h3>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>

              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label
              >

                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                        COLORS.length
                      ]
                    }
                  />
                ))}

              </Pie>

              <Tooltip />
              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Agent Directory */}

      <div className="glass">

        <h3 style={{ color: "white" }}>
          🤖 Agent Directory
        </h3>

        <table className="agent-table">

          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Team</th>
              <th>Status</th>
              <th>Version</th>
              <th>Users</th>
            </tr>
          </thead>

          <tbody>

            {agents.map(agent => (

              <tr key={agent.id}>
                <td>{agent.id}</td>
                <td>{agent.name}</td>
                <td>{agent.team}</td>
                <td>{agent.status}</td>
                <td>{agent.version}</td>
                <td>{agent.users}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>
  );
}

export default Dashboard;