import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Navigation } from "./";

export const Layout = () => {
  return (
    <Box sx={{ background: "#F2F2F2", minHeight: "100vh" }}>
      <Navigation />

      <Outlet />
    </Box>
  );
};
