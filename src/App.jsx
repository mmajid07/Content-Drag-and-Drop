import React from "react";
import { DragAndDropSideBar } from "./DragAndDrop/DragAndDropSideBar";
import { Box } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashborad } from "./DragAndDrop/Pages/Dashborad";
import { Modules } from "./DragAndDrop/Pages/Modules";
import { Survays } from "./DragAndDrop/Pages/Survays";
import { ExportData } from "./DragAndDrop/Pages/ExportData";

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex", width: "100vw" }}>
        <Box sx={{ width: "6vw" }}>
          <DragAndDropSideBar />
        </Box>

        <Box sx={{ width: "94vw" }}>
          <Routes>
            <Route path="/" element={<Dashborad />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/surveys" element={<Survays />} />
            <Route path="export" element={<ExportData />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
