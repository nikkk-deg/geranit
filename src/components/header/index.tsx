import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  CLASS_HEADER,
  CLASS_INFO,
  CLASS_LINK,
  CLASS_TITLE_LOGO,
  INFO_TXT,
  LINK_HOME,
  LOGO,
} from "./constants";
import Links from "./links";

export default function Header() {
  return (
    <Box className={CLASS_HEADER}>
      <NavLink to={LINK_HOME}>
        <img className={CLASS_TITLE_LOGO} src={LOGO} />
      </NavLink>
      <Box className={CLASS_INFO}>{INFO_TXT}</Box>;
      <Box className={CLASS_LINK}></Box>;
      <Links />
    </Box>
  );
}
