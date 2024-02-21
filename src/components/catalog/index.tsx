import { Box } from "@mui/material";
import ProductCard from "./card";
import {
  CLASS_CATALOG_MAIN,
  imgLink1,
  overiviewCard1,
  overiviewCard2,
  overiviewCard3,
  overiviewCard4,
  titleCard1,
  titleCard2,
  titleCard3,
  titleCard4,
  CLASS_CATALOG_BOX,
} from "./constants";

export default function Catalog() {
  return (
    <Box className={CLASS_CATALOG_BOX}>
      <Box className={CLASS_CATALOG_MAIN}>
        <ProductCard
          img={imgLink1}
          title={titleCard1}
          overiview={overiviewCard1}
        />
        <ProductCard
          img={imgLink1}
          title={titleCard2}
          overiview={overiviewCard2}
        />
        <ProductCard
          img={imgLink1}
          title={titleCard3}
          overiview={overiviewCard3}
        />
        <ProductCard
          img={imgLink1}
          title={titleCard4}
          overiview={overiviewCard4}
        />
      </Box>
    </Box>
  );
}
