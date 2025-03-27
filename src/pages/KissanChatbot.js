import React, { useState } from "react";

const KissanChatbot = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

   
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
        console.log("Sending request...");
      
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
            },
            body: JSON.stringify({
              model: "llama3-70b-8192",
              messages: newMessages,
              max_tokens: 1024,
              temperature: 0.7,
              top_p: 1,
            }),
          });
          
      
        console.log("Response status:", response.status);
      
        const data = await response.json();
        console.log("Response data:", data);
      
        if (!response.ok) {
          throw new Error(`API Error: ${data.error?.message || response.status}`);
        }
      
        const botMessage = data.choices?.[0]?.message?.content || "No response from AI.";
        setMessages([...newMessages, { role: "assistant", content: botMessage }]);
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages([...newMessages, { role: "assistant", content: "Error fetching response." }]);
      } finally {
        setLoading(false);
      }      
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: "20px", color: "#333" }}>Chatbot</h1>

      <div
        style={{
          width: "80%",
          height: "60vh",
          overflowY: "auto",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              borderRadius: "8px",
              color: "#fff",
              maxWidth: "70%",
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.role === "user" ? "#007bff" : "#28a745",
            }}
          >
            {msg.content}
          </div>
        ))}
        {loading && <p style={{ textAlign: "center", fontStyle: "italic", color: "#777" }}>Thinking...</p>}
      </div>

      <div style={{ display: "flex", width: "80%", marginTop: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "10px 15px",
            marginLeft: "10px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default KissanChatbot;
