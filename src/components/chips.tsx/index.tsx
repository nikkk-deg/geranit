import { Box } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";

export default function Chips() {
  return (
    <Box className="cards-conteiner">
      <Box
        component={"span"}
        sx={{ display: "flex-block", marginTop: "20px" }}
        className="iwt"
      >
        <CurrencyRubleIcon fontSize="large" sx={{ marginTop: "-15px" }} />
        <Box
          component="span"
          sx={{ fontSize: "x-large", marginTop: "30px", marginLeft: "15px" }}
        >
          Фиксированные цены в рублях
        </Box>
      </Box>
      <Box
        component={"span"}
        sx={{ display: "block", marginTop: "20px" }}
        className="iwt"
      >
        <ThumbUpIcon fontSize="large" sx={{ marginTop: "-15px" }} />
        <Box
          component="span"
          sx={{ fontSize: "x-large", marginTop: "30px", marginLeft: "15px" }}
        >
          Отличные условия для сотрудничетсва
        </Box>
      </Box>
      <Box
        component={"span"}
        sx={{ display: "block", marginTop: "20px" }}
        className="iwt"
      >
        <AccessTimeIcon fontSize="large" sx={{ marginTop: "-15px" }} />
        <Box
          component="span"
          sx={{ fontSize: "x-large", marginTop: "30px", marginLeft: "15px" }}
        >
          Предсказуемые сроки производства
        </Box>
      </Box>
      <Box
        component={"span"}
        sx={{ display: "block", marginTop: "20px" }}
        className="iwt"
      >
        <LightbulbIcon fontSize="large" sx={{ marginTop: "-15px" }} />
        <Box
          component="span"
          sx={{ fontSize: "x-large", marginTop: "30px", marginLeft: "15px" }}
        >
          Российское производство
        </Box>
      </Box>
      <Box
        component={"span"}
        sx={{ display: "block", marginTop: "20px" }}
        className="iwt"
      >
        <SupportAgentIcon fontSize="large" sx={{ marginTop: "-15px" }} />
        <Box
          component="span"
          sx={{ fontSize: "x-large", marginTop: "30px", marginLeft: "15px" }}
        >
          Поддержка клиентов
        </Box>
      </Box>
      <Box
        component={"span"}
        sx={{ display: "block", marginTop: "20px" }}
        className="iwt"
      >
        <WarehouseIcon fontSize="large" sx={{ marginTop: "-15px" }} />
        <Box
          component="span"
          sx={{ fontSize: "x-large", marginTop: "30px", marginLeft: "15px" }}
        >
          Свой обширный склад
        </Box>
      </Box>
    </Box>
  );
}
