import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { CLASS_CARD } from "./constants";
import { NavLink } from "react-router-dom";

interface ProductCard {
  img: string;
  title: string;
  overiview: string;
  link: string;
}
export default function ProductCard({
  img,
  title,
  overiview,
  link,
}: ProductCard) {
  return (
    <Card className={CLASS_CARD} sx={{ maxWidth: 345 }}>
      <NavLink to={link}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {overiview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
    </Card>
  );
}
