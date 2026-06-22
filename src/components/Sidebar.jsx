import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <div className="sidebar">

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        <h2>🏎️ Dashboard</h2>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "12px"
          }}
        >
          AI Agent Portal
        </p>
      </div>

      <Link
        to="/"
        className={
          isActive("/")
            ? "active-link"
            : ""
        }
      >
        📊 Dashboard
      </Link>

      <Link
        to="/monitoring"
        className={
          isActive("/monitoring")
            ? "active-link"
            : ""
        }
      >
        📈 Monitoring
      </Link>

      <Link
        to="/marketplace"
        className={
          isActive("/marketplace")
            ? "active-link"
            : ""
        }
      >
        🤖 Marketplace
      </Link>

      <Link
        to="/admin"
        className={
          isActive("/admin")
            ? "active-link"
            : ""
        }
      >
        🔐 Admin
      </Link>

    </div>
  );
}

export default Sidebar;