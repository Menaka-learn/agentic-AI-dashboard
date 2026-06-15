import {
  FaSearch,
  FaBell,
  FaUserCircle
} from "react-icons/fa";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  BarChart,
  Bar
} from "recharts";

function MonitoringDashboard() {

  const userTrendData = [
    { day: "Mon", users: 120 },
    { day: "Tue", users: 180 },
    { day: "Wed", users: 150 },
    { day: "Thu", users: 250 },
    { day: "Fri", users: 300 },
    { day: "Sat", users: 280 },
    { day: "Sun", users: 350 }
  ];

  const creditData = [
    { month: "Jan", credits: 12000 },
    { month: "Feb", credits: 18000 },
    { month: "Mar", credits: 24000 },
    { month: "Apr", credits: 30000 },
    { month: "May", credits: 45000 }
  ];

  const feedbackData = [
    { name: "Positive", value: 82 },
    { name: "Negative", value: 18 }
  ];

  const agentUsageData = [
    { name: "Developer", usage: 580 },
    { name: "Testing", usage: 420 },
    { name: "Performance", usage: 680 },
    { name: "PR", usage: 220 }
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444"
  ];

  return (
    <div>

      {/* Top Bar */}

      <div
        className="glass"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px"
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255,255,255,.08)",
            padding: "10px 15px",
            borderRadius: "12px",
            width: "350px"
          }}
        >
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              width: "100%",
              outline: "none"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            fontSize: "22px"
          }}
        >
          <FaBell />
          <FaUserCircle />
        </div>

      </div>

      {/* Hero Banner */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#8b5cf6,#ec4899,#f97316)",
          borderRadius: "25px",
          padding: "40px",
          marginBottom: "25px",
          color: "white"
        }}
      >

        <h1>
          📈 Agentic AI Monitoring
        </h1>

        <p>
          Real-time visibility into AI usage,
          feedback, credits and adoption.
        </p>

      </div>

      {/* KPI Cards */}

      <div className="metric-grid">

        <div className="metric-card metric1">
          <h2>16</h2>
          <p>Active Users</p>
        </div>

        <div className="metric-card metric2">
          <h2>82%</h2>
          <p>Positive Feedback</p>
        </div>

        <div className="metric-card metric3">
          <h2>68</h2>
          <p>Total Prompts</p>
        </div>

        <div className="metric-card metric4">
          <h2>446K</h2>
          <p>Credits Consumed</p>
        </div>

      </div>

      {/* Charts Row 1 */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "25px"
        }}
      >

        <div className="glass">

          <h3>👥 Active Users Trend</h3>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={userTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8b5cf6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="glass">

          <h3>😊 Feedback Analysis</h3>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>

              <Pie
                data={feedbackData}
                dataKey="value"
                outerRadius={100}
                label
              >

                {feedbackData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Charts Row 2 */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "25px"
        }}
      >

        <div className="glass">

          <h3>💳 Credit Consumption</h3>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <AreaChart data={creditData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="credits"
                stroke="#06b6d4"
                fill="#06b6d4"
              />
            </AreaChart>
          </ResponsiveContainer>

        </div>

        <div className="glass">

          <h3>🤖 Agent Usage</h3>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={agentUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="usage"
                fill="#8b5cf6"
                radius={[10,10,0,0]}
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default MonitoringDashboard;