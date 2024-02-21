import { Box } from "@mui/material";
import Slogan from "../components/slogan";
import Chips from "../components/chips.tsx/index.tsx";
import Catalog from "../components/catalog/index.tsx";

export default function HomePage() {
  return (
    <Box>
      <Slogan />
      <Chips />
      <Catalog />
    </Box>
  );
}
