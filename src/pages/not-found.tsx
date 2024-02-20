import { Box } from "@mui/material";
import { CLASS_NOT_FOUND, TXT_ERROR_PAGE1, TXT_ERROR_PAGE2 } from "./constants";

export default function NotFound() {
  return (
    <Box>
      <p className={CLASS_NOT_FOUND}>{TXT_ERROR_PAGE1}</p>
      <p className={CLASS_NOT_FOUND}>{TXT_ERROR_PAGE2}</p>
    </Box>
  );
}
