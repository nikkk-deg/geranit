import { Box } from "@mui/material";
import {
  CLASS_FOOTER,
  CLASS_FOOTER_TITLE,
  TXT_FOOTER1,
  TXT_FOOTER2,
} from "../constants";

export default function Footer() {
  return (
    <Box className={CLASS_FOOTER}>
      <Box className={CLASS_FOOTER_TITLE}>{TXT_FOOTER2}</Box>
      <Box className={CLASS_FOOTER_TITLE}>{TXT_FOOTER1}</Box>
    </Box>
  );
}
