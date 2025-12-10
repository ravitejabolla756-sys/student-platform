import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import FilesPage from "./pages/FilesPage";
import CompressPage from "./pages/CompressPage";
import CalculatorsPage from "./pages/CalculatorsPage";
import AIToolsPage from "./pages/AIToolsPage";
import MediaPage from "./pages/MediaPage";
import StudentToolsPage from "./pages/StudentToolsPage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import ToolPlaceholder from "./pages/ToolPlaceholder";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/files" element={<FilesPage />} />
            <Route path="/compress" element={<CompressPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/ai-tools" element={<AIToolsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/student-tools" element={<StudentToolsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/tool/:toolId" element={<ToolPlaceholder />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
