import { Box } from "@mui/material";
import {
  CATALOG_TXT,
  CLASS_LINKS,
  NEWS_TXT,
  OVERVIEW_TXT,
  SUPPORT_TXT,
  CLASS_LINKS_BOX,
  CONTACTS_TXT,
} from "./constants";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Links() {
  return (
    <Box className={CLASS_LINKS_BOX}>
      <Box className={CLASS_LINKS}>{OVERVIEW_TXT}</Box>
      <HashLink to={"/#catalog"}>
        <Box className={CLASS_LINKS}>{CATALOG_TXT}</Box>
      </HashLink>
      <Box className={CLASS_LINKS}>{NEWS_TXT}</Box>
      <Box className={CLASS_LINKS}>{SUPPORT_TXT}</Box>
      <Box className={CLASS_LINKS}>{CONTACTS_TXT}</Box>
    </Box>
  );
}
