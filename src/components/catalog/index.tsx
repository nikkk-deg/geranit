import { Box } from "@mui/material";
import ProductCard from "./card";
import {
  imgLink1,
  linkCard1,
  linkCard2,
  linkCard3,
  linkCard4,
  overiviewCard1,
  overiviewCard2,
  overiviewCard3,
  overiviewCard4,
  titleCard1,
  titleCard2,
  titleCard3,
  titleCard4,
} from "./constants";

export default function Catalog() {
  return (
    <Box className={"cards-conteiner-box"}>
      <ProductCard
        img={imgLink1}
        title={titleCard1}
        overiview={overiviewCard1}
        link={`products/${linkCard1}`}
      />
      <ProductCard
        img={imgLink1}
        title={titleCard2}
        overiview={overiviewCard2}
        link={`products/${linkCard2}`}
      />
      <ProductCard
        img={imgLink1}
        title={titleCard3}
        overiview={overiviewCard3}
        link={`products/${linkCard3}`}
      />
      <ProductCard
        img={imgLink1}
        title={titleCard4}
        overiview={overiviewCard4}
        link={`products/${linkCard4}`}
      />
    </Box>
  );
}
