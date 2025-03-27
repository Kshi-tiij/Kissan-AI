import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import AgriCopilotPlatform from "./pages/AgriCopilotPlatform";
import DhenuAgriModels from "./pages/DhenuAgriModels";
import AdminAgriCopilot from "./pages/AdminAgriCopilot";
import KissanChatbot from "./pages/KissanChatbot";

function App() {
    return (
      <Router>
        <Header />
        <Routes>
          
          <Route path="/" element={<Cards />} />
          
          <Route path="/kissan-copilot" element={<KissanChatbot />} />
          <Route path="/agricopilot-platform" element={<AgriCopilotPlatform />} />
          <Route path="/admin-agricopilot" element={<AdminAgriCopilot/>}/>
          <Route path="/dhenu-agri-models" element={<DhenuAgriModels />} />
        </Routes>
        <Footer />
      </Router>
    );
  }

export default App;
  