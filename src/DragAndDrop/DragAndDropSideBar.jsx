import {
  AppRegistration,
  ContactEmergency,
  Dashboard,
  Home,
  ImportExport,
  Info,
  ViewModuleSharp,
} from "@mui/icons-material";
import {
  Drawer,
  hexToRgb,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DragAndDropSideBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuItems = [
    { text: "DashBoard", icon: <Dashboard />, path: "/" },
    { text: "Modules", icon: <ViewModuleSharp />, path: "/modules" },
    { text: "Surveys", icon: <AppRegistration />, path: "/surveys" },
    { text: "Export Data", icon: <ImportExport />, path: "/export" },
  ];
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: "10vw" }}>
      <List>
        <ListItem sx={{ height: "70px" }}></ListItem>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              borderRight: selectedIndex === index ? "5px solid red" : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginBottom: "20px",
            }}
            onClick={() => {
              setSelectedIndex(index);
              navigate(item?.path);
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",

                color: selectedIndex === index ? "red" : "grey",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: "10px", // Font size applied directly to the text
                textAlign: "center", // Center alignment
                color: selectedIndex === index ? "red" : "grey", // Dynamic color
              }}
              sx={{
                marginTop: "4px", // Space between icon and text
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
