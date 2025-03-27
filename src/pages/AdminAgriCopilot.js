import React, { useState } from "react";

const adminUsers = [
  ["admin", "admin123"],
  ["superadmin", "superpass"]
];

const AdminPanel = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const userFound = adminUsers.find(([user, pass]) => user === username && pass === password);
    if (userFound) {
      setError("");
      setShowLogin(false);
      setTimeout(() => setLoggedIn(true), 500); // Delayed transition for smooth effect
    } else {
      setError("Invalid username or password!");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowLogin(true);
    setUsername("");
    setPassword("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div style={styles.container}>
      {showLogin && (
        <div style={{ ...styles.loginForm, opacity: showLogin ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>Login</button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
      )}

      {loggedIn && (
        <div style={styles.adminDashboard}>
          <h2>Welcome, Admin</h2>
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          <div style={styles.buttonContainer}>
            <a href="https://docs.google.com/forms/d/15Hf2fpG5BGNsL-9Ol_qYBGVHDQXSIaKh-ce82Y4h-4s/edit" target="_blank" rel="noopener noreferrer">
              <button style={styles.redirectButton}>Sandbox Requests Contact Form</button>
            </a>
            <a href="https://docs.google.com/spreadsheets/d/15wagt1LOpeITB4ESc9ak4Ukq4bA9iMMiYNTAt6ZlY0U/edit?resourcekey=&gid=136095225#gid=136095225" target="_blank" rel="noopener noreferrer">
              <button style={styles.redirectButton}>Sandbox Requests</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    fontFamily: "Arial, sans-serif",
  },
  loginForm: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    textAlign: "center",
    width: "50%",
    marginBottom:"50px"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    width: "80%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  adminDashboard: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  redirectButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default AdminPanel;
