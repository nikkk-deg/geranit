import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  titleCard1,
  titleCard2,
  titleCard3,
  titleCard4,
} from "../components/catalog/constants";

export default function ProductsCatalog() {
  const { type } = useParams();
  switch (type) {
    case titleCard3: {
      return <Box>{titleCard3}</Box>;
    }

    default: {
      return <Box>Нет в продаже</Box>;
    }
  }
  return;
}
