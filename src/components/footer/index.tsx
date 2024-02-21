import { Box } from "@mui/material";
import {
  CLASS_CLASS_FOOTER_TITLE_TXT,
  CLASS_FOOTER,
  CLASS_FOOTER_CALL,
  CLASS_FOOTER_CALL_TXT,
  CLASS_FOOTER_TITLE,
  CLASS_FOOTER_TITLE_TXT,
  CLASS_FOOTER_WRITE,
  FOOTER_CALL,
  FOOTER_CALL_TXT,
  FOOTER_TITLE_TXT,
  FOOTER_WRITE,
  FOOTER_WRITE_TXT,
  TXT_FOOTER2,
} from "../constants";

export default function Footer() {
  return (
    <Box className={CLASS_FOOTER}>
      <Box className={CLASS_FOOTER_TITLE}>{TXT_FOOTER2}</Box>
      <Box className = {CLASS_FOOTER_TITLE_TXT}>{FOOTER_TITLE_TXT}</Box>
      <Box className = {CLASS_FOOTER_CALL}>{FOOTER_CALL}</Box>
      <Box className = {CLASS_FOOTER_CALL_TXT}>{FOOTER_CALL_TXT}</Box>
      <Box className = {CLASS_FOOTER_WRITE}>{FOOTER_WRITE}</Box>
      <Box className = {CLASS_CLASS_FOOTER_TITLE_TXT}>{FOOTER_WRITE_TXT}</Box>
    </Box>
  );
}
