import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "30px",
        zIndex: 1000
      }}
    >

      {/* 3 Dot Button */}

      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "30px",
          cursor: "pointer"
        }}
      >
        ⋮
      </button>

      {/* Dropdown Menu */}

      {open && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "0",

            width: "180px",

            background: "#1e293b",

            borderRadius: "12px",

            overflow: "hidden",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.4)"
          }}
        >

          <div
            className="menu-item"
            onClick={() => {
              navigate("/dashboard");
              setOpen(false);
            }}
          >
            📊 Dashboard
          </div>

          <div
            className="menu-item"
            onClick={() => {
              navigate("/marketplace");
              setOpen(false);
            }}
          >
            🤖 Marketplace
          </div>

          <div
            className="menu-item"
            onClick={() => {
              navigate("/admin");
              setOpen(false);
            }}
          >
            🔐 Admin
          </div>

          <div
            className="menu-item"
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            🚪 Sign Out
          </div>

        </div>
      )}
    </div>
  );
}

export default ProfileMenu;