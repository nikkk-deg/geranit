import { Box } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import {
  CHIPS_TITLE1,
  CHIPS_TITLE2,
  CHIPS_TITLE3,
  CHIPS_TITLE4,
  CHIPS_TITLE5,
  CHIPS_TITLE6,
  CLASS_CHIPS1,
  CLASS_CHIPS2,
  CLASS_CHIPS_BOX1,
  CLASS_CHIPS_BOX2,
  CLASS_CHIPS_TITLE,
  CLASS_ICON_CHIPS,
  CLASS_CHIPS_MAIN,
} from "../constants";

export default function Chips() {
  return (
    <Box className={CLASS_CHIPS_MAIN}>
      <Box className={CLASS_CHIPS1}>
        <Box className={CLASS_CHIPS_BOX1}>
          <Box className={CLASS_CHIPS_TITLE}>{CHIPS_TITLE1}</Box>
          <LightbulbIcon
            className={CLASS_ICON_CHIPS}
            fontSize="large"
          ></LightbulbIcon>
        </Box>
        <Box className={CLASS_CHIPS_BOX1}>
          <Box className={CLASS_CHIPS_TITLE}>{CHIPS_TITLE2}</Box>
          <SupportAgentIcon
            className={CLASS_ICON_CHIPS}
            fontSize="large"
          ></SupportAgentIcon>
        </Box>
        <Box className={CLASS_CHIPS_BOX1}>
          <Box className={CLASS_CHIPS_TITLE}>{CHIPS_TITLE3}</Box>
          <WarehouseIcon
            className={CLASS_ICON_CHIPS}
            fontSize="large"
          ></WarehouseIcon>
        </Box>
      </Box>

      <Box className={CLASS_CHIPS2}>
        <Box className={CLASS_CHIPS_BOX2}>
          <Box className={CLASS_CHIPS_TITLE}>{CHIPS_TITLE4}</Box>
          <CurrencyRubleIcon
            className={CLASS_ICON_CHIPS}
            fontSize="large"
          ></CurrencyRubleIcon>
        </Box>
        <Box className={CLASS_CHIPS_BOX2}>
          <Box className={CLASS_CHIPS_TITLE}>{CHIPS_TITLE5}</Box>
          <ThumbUpIcon
            className={CLASS_ICON_CHIPS}
            fontSize="large"
          ></ThumbUpIcon>
        </Box>
        <Box className={CLASS_CHIPS_BOX2}>
          <Box className={CLASS_CHIPS_TITLE}>{CHIPS_TITLE6}</Box>
          <AccessTimeIcon
            className={CLASS_ICON_CHIPS}
            fontSize="large"
          ></AccessTimeIcon>
        </Box>
      </Box>
    </Box>
  );
}
