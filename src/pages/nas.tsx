import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NAS() {
  return (
    <Box sx={{ display: "flexbox", justifyContent: "center", width: "100vh" }}>
      <Box sx={{ fontSize: "xx-large", display: "block" }}>
        Системы хранения данных Геранит
      </Box>
      <div className="card" style={{ width: "100%" }}>
        <Box sx={{ width: "450px" }}>
          <img
            className="card-img-top"
            src="/img/nas1.jpg"
            alt="изображение СХД Геранит "
            //   width="50px"
            //   height="0px"
          />
        </Box>
        <div className="card-body">
          <p className="card-text">
            Гибкая система хранения петабайтного уровня для растущих
            потребностей в хранении данных
          </p>
        </div>
        <NavLink to={`/nas-dobro`}>
          <Button>Подробнее</Button>
        </NavLink>
      </div>
    </Box>
  );
}
