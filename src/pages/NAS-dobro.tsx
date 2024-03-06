import { Box } from "@mui/material";
import TechDobro from "../components/nas.tsx/tech-dobro";
import OverviewDobro from "../components/nas.tsx/overview-dobro";
import CaruselDobro from "../components/nas.tsx/carusel";

export default function NASdobro() {
  return (
    <Box>
      <Box>
        <CaruselDobro />
      </Box>
      <Box>
        <OverviewDobro />
      </Box>

      <Box>
        <TechDobro />
      </Box>
    </Box>
  );
}
