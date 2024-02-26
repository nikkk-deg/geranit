import { Box } from "@mui/material";
import {
  CLASS_SLOGAN,
  CLASS_SLOGAN_TITLE1,
  CLASS_SLOGAN_TITLE2,
  SLOGAN_TITLE1,
  SLOGAN_TITLE2,
  SLOGAN_TITLE5,
  SLOGAN_TITLE3,
  SLOGAN_TITLE4,
} from "../constants";

export default function Slogan() {
  return (
    // <Box className={"slogan"}>
    //   <Box sx={{ width: "100%", height: "90px" }}></Box>
    //   <Box className={CLASS_SLOGAN_TITLE1}>{SLOGAN_TITLE1}</Box>
    //   <Box className={CLASS_SLOGAN_TITLE1}>{SLOGAN_TITLE2}</Box>
    // </Box>
    <Box className="background-main ">
      <Box sx={{ width: "100%", height: "50px" }}></Box>
      <Box className={"background-title1"}>{SLOGAN_TITLE1}</Box>
      <Box className={"background-title2"}>{SLOGAN_TITLE2}</Box>
    </Box>
  );
}
