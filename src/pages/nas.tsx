import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NAS() {
  return (
    <Box sx={{ display: "flexbox", justifyContent: "center", width: "100%" }}>
      <Box
        sx={{
          fontSize: "xx-large",
          width: "max-content",
          maxWidth: "100%",
          margin: "15px auto 0 auto",
        }}
      >
        Системы хранения данных ГЕРАНИТ
      </Box>
      <div
        className="card card-box"
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "25px",
          border: "1px solid #777",
          borderRadius: "15px",
        }}
      >
        <Box sx={{ width: "400px", margin: "0 auto 0 auto" }}>
          <Box
            className="NAS-dobro-txt"
            // sx={{
            //   margin: "5px 0 40px 0",
            //   position: "relative",
            //   left: "-90px",
            // }}
          >
            CХД "Добро"
          </Box>

          <Box sx={{ height: "300px", margin: "75px 0 0 0" }}>
            <img
              className="card-img-top"
              src="/img/nas1.jpg"
              alt="изображение СХД ГЕРАНИТ Добро "
              //   width="50px"
              //   height="0px"
            />
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "x-large",
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto 0 auto",
          }}
          className="card-body"
        >
          <p className="card-text">
            Гибкая система хранения петабайтного уровня для растущих
            потребностей в хранении данных
          </p>
        </Box>
        <NavLink to={`/nas-dobro`}>
          <Button
            variant="contained"
            className="button-mui"
            sx={{
              marginLeft: "53px",
              backgroundColor: "#444",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#3c52b2",
              },
            }}
          >
            Подробнее
          </Button>
        </NavLink>
      </div>
    </Box>
  );
}
