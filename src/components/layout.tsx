import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./header";
import { CLASS_MAIN_CONTENT } from "./constants";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Box className={CLASS_MAIN_CONTENT}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
