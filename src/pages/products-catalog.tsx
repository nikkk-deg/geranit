import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  linkCard1,
  linkCard2,
  linkCard3,
  linkCard4,
  titleCard1,
  titleCard2,
  titleCard3,
  titleCard4,
} from "../components/catalog/constants";
import NAS from "./nas";

export default function ProductsCatalog() {
  const { type } = useParams();
  switch (type) {
    case linkCard1: {
      return (
        <Box
          sx={{
            width: "max-content",
            margin: "250px auto 0 auto",
            height: "70vh",
            fontSize: "xx-large",
          }}
        >
          Нет в продаже
        </Box>
      );
    }
    case linkCard2: {
      return (
        <Box
          sx={{
            width: "max-content",
            margin: "250px auto 0 auto",
            height: "70vh",
            fontSize: "xx-large",
          }}
        >
          Нет в продаже
        </Box>
      );
    }
    case linkCard3: {
      return (
        <Box
          sx={{
            borderRadius: "10px",
            width: "800px",
            margin: "180px auto 100px  auto",
            height: "720px",
            fontSize: "xx-large",
          }}
        >
          <NAS />
        </Box>
      );
    }
    case linkCard4: {
      return (
        <Box
          sx={{
            width: "max-content",
            margin: "250px auto 0 auto",
            height: "70vh",
            fontSize: "xx-large",
          }}
        >
          Нет в продаже
        </Box>
      );
    }

    default: {
      return <Box>Нет в продаже</Box>;
    }
  }
  return;
}
