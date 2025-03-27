import React from "react";
import copilotImg1 from "../images/logo.png";
import copilotImg11 from "../images/plat_logo.jpg";
import copilotImg12 from "../images/plat_unlock.png";
import copilotImg13 from "../images/plat_convers.png";
import { Link } from "react-router-dom";

const AgriCopilotPlatform = () => {
  return (
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
        <a href="/agricopilot-platform" style={{ textDecoration: "none", color: "#333", fontSize: "20px", fontWeight: "bold" }}>
        <img src={copilotImg1} alt="AgriCopilot Logo" style={{ height: "40px" }} />
        </a>


        <div>
          <Link to="/" style={{ margin: "0 15px", textDecoration: "none", color: "#333", fontSize: "16px" }}>Home</Link>
          <Link to="/" style={{ margin: "0 15px", textDecoration: "none", color: "#333", fontSize: "16px" }}>Features</Link>
          <Link to="/" style={{ margin: "0 15px", textDecoration: "none", color: "#333", fontSize: "16px" }}>News</Link>
        </div>

        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
        Contact Us
        </button>
        
      </nav>

      <section
        style={{
          backgroundImage: `url(${copilotImg11})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h2>Revolutionizing Agriculture with</h2>
        <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>The Generative AI Knowledge Platform</h1>
        <p>Empower your agriculture business with AI-driven solutions that bridge knowledge gaps and accelerate innovation.</p>
        <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          borderRadius: '5px',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#45A049')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        onClick={() => window.open('https://forms.gle/zqf5ytbW4kHKK1dx6', '_blank')}
        >
        Request A Sandbox
      </button>
      </section>

      {/* Informational Sections */}
      <section style={{ display: "flex", alignItems: "center", padding: "20px", gap: "20px" }}>
        <div style={{ flexBasis: "50%" }}>
          <h2>Unlock the Potential of Your Agricultural Data</h2>
          <p style={{fontSize:"20px"}}>Agriculture businesses often grapple with diverse data types and formats, making it challenging to extract actionable insights and deploy AI solutions. There's a pressing need for a unified platform that understands the agriculture domain, bridges literacy and language gaps, and accelerates the deployment of AI-powered use cases.</p>
        </div>
        <div style={{ flexBasis: "50%" }}>
          <img src={copilotImg12} alt="Agricultural Data" style={{ width: "100%", borderRadius: "10px" }} />
        </div>
      </section>

      <section style={{ display: "flex", alignItems: "center", padding: "20px", gap: "20px" }}>
        <div style={{ flexBasis: "50%" }}>
          <img src={copilotImg13} style={{ width: "100%", borderRadius: "10px" }} />
        </div>
        <div style={{ flexBasis: "50%" }}>
          <h2>Full-stack Vernacular Conversational Platform</h2>
          <p style={{fontSize:"20px"}}>AgriCopilot by KissanAI is a multilingual, voice-enabled GenAI Knowledge Platform designed specifically for the agriculture sector. We enable enterprises to bring their data—regardless of type or format—into one platform, transforming it into production-grade AI solutions across various use cases. With AgriCopilot, eliminate the need for separate solutions, stay ahead with AI advancements, and build long-term partnerships grounded in agricultural expertise...</p>
        </div>
      </section>

      <section style={{ display: "flex", alignItems: "center", paddingTop:"20px"}}>
       
       </section> 
       
    </div>);
};

export default AgriCopilotPlatform;
