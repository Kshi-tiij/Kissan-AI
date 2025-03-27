import React from "react";
import { Link } from "react-router-dom";
import copilotImg from "../images/copilot.png";
import copilotImg2 from "../images/models.png";
import copilotImg3 from "../images/platform.png";


const Cards = () => {
  const cardData = [
    {
      title: "Kissan Copilot",
      image: copilotImg,
      description: "AI tools for farmers.",
      link: "/kissan-copilot",
    },
    {
      title: "AgriCopilot Platform",
      image: copilotImg2,
      description: "Data-driven solutions.",
      link: "/agricopilot-platform",
    },
    {
      title: "Dhenu - Agri Models",
      image: copilotImg3,
      description: "Generative AI models.",
      link: "/dhenu-agri-models",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
      {cardData.map((card, index) => (
        <Link to={card.link} key={index} style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <img src={card.image} alt={card.title} style={{ width: "100%", borderRadius: "10px" }} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
