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

export default function Links() {
  return (
    <Box className={CLASS_LINKS_BOX}>
      <Box className={CLASS_LINKS}>{OVERVIEW_TXT}</Box>
      <Box className={CLASS_LINKS}>{CATALOG_TXT}</Box>
      <Box className={CLASS_LINKS}>{NEWS_TXT}</Box>
      <Box className={CLASS_LINKS}>{SUPPORT_TXT}</Box>
      <Box className={CLASS_LINKS}>{CONTACTS_TXT}</Box>
    </Box>
  );
}
