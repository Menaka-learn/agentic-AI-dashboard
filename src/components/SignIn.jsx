import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple login for now
    // Later you can connect to backend authentication

    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        className="admin-form"
        style={{
          width: "450px"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          🚀 AI Portal
        </h1>

        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          🔐 Sign In
        </h2>

        <form onSubmit={handleSubmit}>

          <label>Username</label>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Sign In
          </button>

        </form>
      </div>
    </div>
  );
}

export default SignIn;