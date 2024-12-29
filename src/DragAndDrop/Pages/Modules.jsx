import {
  AppRegistration,
  Dashboard,
  Delete,
  Edit,
  Image,
  ImportExport,
  Radio,
  Square,
  TextFields,
  ViewModuleSharp,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio as MuiRadio,
} from "@mui/material";
import React, { useState } from "react";

export const Modules = () => {
  const componentList = [
    {
      id: 1,
      text: "TextField",
      icon: <TextFields />,
      component: <TextField variant="outlined" fullWidth />,
    },
    {
      id: 2,
      text: "Radio Button",
      icon: <Radio />,
      component: (
        <RadioGroup sx={{ color: "black" }}>
          <FormControlLabel
            value="option1"
            control={<MuiRadio />}
            label="Option 1"
          />
          <FormControlLabel
            value="option2"
            control={<MuiRadio />}
            label="Option 2"
          />
        </RadioGroup>
      ),
    },
    {
      id: 3,
      text: "Box",
      icon: <Square />,
      component: (
        <Box
          sx={{ width: "100px", height: "100px", backgroundColor: "blue" }}
        />
      ),
    },
    {
      id: 4,
      text: "Image",
      icon: <Image />,
      component: (
        <img
          src="https://via.placeholder.com/150"
          alt="Example"
          style={{ width: "100px", height: "100px" }}
        />
      ),
    },
  ];

  const [droppedItems, setDroppedItems] = useState([]);
  console.log("Dropped item data is >>>", droppedItems);

  const handleDragStart = (item) => (event) => {
    console.log("Item data is ", item);
    event.dataTransfer.setData(
      "application/json",
      JSON.stringify({ id: item.id, text: item.text })
    );
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("application/json");
    const droppedItem = JSON.parse(data);
    console.log("Dropped item data is ", droppedItem);

    setDroppedItems([...droppedItems, droppedItem]);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allow drop
  };

  return (
    <Box sx={{ height: "100vh", width: "100%", backgroundColor: "white" }}>
      <Stack direction={"row"}>
        {/* Left Box */}
        <Box sx={{ width: "20vw", height: "100vh" }}>
          <Stack
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              variant="h5"
              color="black"
              marginTop={"50px"}
              sx={{ marginLeft: "10px" }}
            >
              Drag Able Components
            </Typography>
            <Box width={"91%"}>
              {componentList.map((item) => (
                <Stack
                  key={item.id}
                  direction={"row"}
                  draggable
                  onDragStart={handleDragStart(item)}
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    backgroundColor: "grey",
                    boxShadow: "20px",
                    padding: "5px 5px",
                    margin: "10px 10px",
                    borderRadius: "5px",
                    cursor: "grab",
                  }}
                >
                  {item.icon}
                  {item.text}
                </Stack>
              ))}
            </Box>
          </Stack>
        </Box>

        {/* Center Box (Drop Area) */}
        <Box
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          sx={{
            width: "51vw",
            height: "100vh",
            backgroundColor: "#f0f0f0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {droppedItems.length === 0 ? (
            <Typography variant="h6" color="grey">
              Drop items here
            </Typography>
          ) : (
            <Box width="90%">
              {droppedItems.map((item, index) => {
                const droppedComponent = componentList.find(
                  (comp) => comp.id === item.id
                )?.component;
                return (
                  <Stack
                    key={index}
                    direction="row"
                    sx={{
                      padding: "10px",
                      marginBottom: "10px",
                      backgroundColor: "white",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      borderRadius: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>{droppedComponent}</Box>
                    <IconButton
                      sx={{
                        "&:focus , &:active": {
                          border: "none",
                          outline: "none",
                        },
                      }}
                      onClick={() =>
                        setDroppedItems((prev) =>
                          prev.filter((droppedItem, i) => i !== index)
                        )
                      }
                    >
                      <Delete sx={{ color: "red" }} />
                    </IconButton>
                  </Stack>
                );
              })}
            </Box>
          )}
        </Box>

        {/* Right Box */}
        <Box
          sx={{
            width: "23vw",
            backgroundColor: "red",
            height: "100vh",
          }}
        ></Box>
      </Stack>
    </Box>
  );
};
