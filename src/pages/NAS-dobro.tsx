import { Box } from "@mui/material";
import TechDobro from "../components/nas.tsx/tech-dobro";
import OverviewDobro from "../components/nas.tsx/overview-dobro";
import CaruselDobro from "../components/nas.tsx/carusel";

export default function NASdobro() {
  return (
    <Box>
      <Box sx={{ marginTop: "200px" }}>
        <CaruselDobro />
      </Box>
      <Box>
        <OverviewDobro />
      </Box>

      <Box sx={{ width: "100%", maxWidth: "1000px", margin: "0 auto 0 auto" }}>
        <Box
          sx={{
            fontSize: "x-large",
            margin: "50px 0 25px 0",
            borderBottom: "1px solid black",
          }}
        >
          Характеристики
        </Box>

        <Box sx={{ margin: "0 auto 50px auto", maxWidth: "700px" }}>
          <TechDobro />
        </Box>
      </Box>
    </Box>
  );
}
