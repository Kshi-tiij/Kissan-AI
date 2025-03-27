import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faChartLine, faMobileAlt, faCode, faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";
import copilotImg1 from "../images/models.png";
import copilotImg2 from "../images/big_tree.png";
import copilotImg3 from "../images/dhenuu.png";
import copilotImg31 from "../images/developers.png";
import copilotImg32 from "../images/bussiness.png";
import copilotImg33 from "../images/government.png";

const users = [
  ["admin", "password123"],
  ["farmer1", "farm@123"],
  ["developer", "devpass"]
];

const DhenuAgriModels = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const userFound = users.find(([user, pass]) => user === username && pass === password);
    if (userFound) {
      setLoggedInUser(username);
      setShowLogin(false);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="dhenu-page">
      <div style={{ padding: "20px" }}>
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            padding: "15px 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={copilotImg1} alt="" style={{ height: "50px" }} />
            <span style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "10px" }}>
              <Link to="/dhenu-agri-models">Dhenu</Link>
            </span>
            {loggedInUser && <span style={{ marginLeft: "15px", fontSize: "18px" }}>Welcome, {loggedInUser}</span>}
          </div>
          {loggedInUser ? (
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          )}
        </nav>

        {showLogin && (
          <div style={{ position: "fixed", top: "0", left: "0", display:"flex", flexDirection:"column",  alignItems:"center", gap:8, background: "#fff", padding: "20px", width:"100%", height:"100%", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", borderRadius: "10px", transition: "all 0.5s" }}>            
            <img src={copilotImg1} alt="" style={{ height: "50px" }} />
            <h2>Dhenu</h2>
            <h4>Login</h4>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ display: "block", width:"40%", marginBottom: "10px", padding: "8px" }} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ display: "block", width:"40%", marginBottom: "10px", padding: "8px" }} />
            <button onClick={handleLogin} style={{ backgroundColor: "#007bff", width:"40%", color: "#fff", padding: "8px 12px", border: "none", cursor: "pointer" }}>Login</button>
            <button onClick={() => setShowLogin(false)} style={{ backgroundColor: "#ccc", width:"40%", padding: "8px 12px", border: "none", cursor: "pointer" }}>Cancel</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        )}

        {/* Main Content Section */}
        <section
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "10vh", margin: "10px 0" }}>Agricultural</h1>
        <h2 style={{ fontSize: "9vh", color: "orange", margin: "10px 0" }}>Language Models</h2>
        <p style={{ fontSize: "2.1em", fontWeight: "bold", margin: "10px 0" }}>
          Democratizing Generative AI for 2.5B+ Farmers worldwide
        </p>
        <p style={{ fontSize: "1.2em", maxWidth: "80%" }}>
          Dhenu is a suite of agricultural language models, developed by <Link to="/" style={{ color: "blue" }}>KissanAI</Link>. Access our models and build innovative solutions for farmers and agribusinesses.
        </p>
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Get Started
          </button>
          <button
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: "2px solid black",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      </section>
    </div>

    <section
        style={{
          width: "98%",
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <img src={copilotImg2} alt="Agriculture Banner" style={{ width: "100%", height: "100vh", objectFit: "cover", borderRadius: "10px" }}
        />
      </section>
          
      {/* Key Features Section with Images */}
      <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        gap: "10px",
      }}
    >
      {/* Left Side Image */}
      <div style={{ flex: "1" }}>
        <img
          src={copilotImg3}
          alt="Dhenu2"
          style={{ width: "80%", borderRadius: "10px" }}
        />
      </div>

      
      <div style={{ flex: "1", textAlign: "left" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "28px" }}>Introducing Dhenu2</h2>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Dhenu2 is our latest series of agricultural language models, trained on
          top of Llama3.1 and Llama3.2 models. These models are optimized for
          India's unique agricultural practices and to understand the nuances of
          Indian farmers. Dhenu2 models are open source and available on Hugging
          Face.
        </p>
        
       
        <ul style={{ fontSize: "18px", lineHeight: "1.6", paddingLeft: "20px" }}>
          <li>
            <strong>Indian Agricultural Practices:</strong> There are variations. You
            need to be sure there is nothing hidden in the middle of text.
          </li>
          <li>
            <strong>High Quality Data:</strong> Trained on 1.5M+ real conversations
            and synthetic instructions, covering more than 4000+ topics.
          </li>
          <li>
            <strong>Built on top of Llama:</strong> Different model sizes, 8B, 3B and
            1B parameters, to cater to different use cases and deployment
            environments.
          </li>
        </ul>
      </div>
    </section>

      {/* Audience Section with Image Cards */}
      <section style={{ textAlign: "center", padding: "40px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ marginBottom: "30px", fontSize: "24px", color: "#333" }}>Who Can Use Dhenu2?</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {/* Developer Card */}
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "300px",
            minHeight: "50%",
            textAlign: "center",
            padding: "20px",
            transition: "transform 0.3s ease",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <img src={copilotImg31} alt="For Developers" style={{ width: "80px", height: "80px", borderRadius: "50%" }}/>
          </div>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px", color: "#007bff" }}>
            For Developers
          </h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Seamlessly incorporate Dhenu2's specialized agricultural AI functionalities into your applications using our
            comprehensive and developer-friendly APIs.
          </p>
        </div>

        {/* Business Card */}
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "300px",
            minHeight: "50%",
            textAlign: "center",
            padding: "20px",
            transition: "transform 0.3s ease",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <img
              src={copilotImg32} alt="For Agri Business" style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
          </div>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px", color: "#28a745" }}>
            For Agri Business
          </h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Leverage Dhenu2's AI models, meticulously trained on extensive agricultural data, to gain actionable insights.
          </p>
        </div>

        {/* Government Card */}
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "300px",
            minHeight: "50%",
            textAlign: "center",
            padding: "20px",
            transition: "transform 0.3s ease",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <img
              src={copilotImg33} alt="For Government" style={{ width: "80px", height: "80px", borderRadius: "50%" }}/>
          </div>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px", color: "#dc3545" }}>
            For Government
          </h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Deploy Dhenu2's cutting-edge AI models to support government initiatives in farmer education.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};
export default DhenuAgriModels;