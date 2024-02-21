import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { CLASS_CARD } from "./constants";

interface ProductCard {
  img: string;
  title: string;
  overiview: string;
}
export default function ProductCard({ img, title, overiview }: ProductCard) {
  return (
    <Card className={CLASS_CARD} sx={{ maxWidth: 345 }}>
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
    </Card>
  );
}
