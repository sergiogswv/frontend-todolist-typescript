import React from "react";
import { Box, Typography } from "@mui/material";

export const Navigation = () => {
  return (
    <Box sx={{ background: "#728C8A", height: "75px", display: "flex" }}>
      <Typography
        sx={{
          color: "#C4F2EE",
          margin: "auto 10px",
          fontWeight: "bold",
          fontSize: "32px",
          textTransform: "upperCase",
        }}
      >
        My Todo List
      </Typography>
    </Box>
  );
};
