import {
  Avatar,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

type TPersonCard = {
  image: string;
  name: string;
  species: string;
  id: number | string;
};

const PersonCard = ({ image, name, species, id }: TPersonCard) => {
  return (
    <Card>
      <CardContent sx={{ textAlign: "center", height: 150 }}>
        <Avatar sx={{ margin: "auto" }} alt={name} src={image} />
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="subtitle2">{species}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/card/${id}`}>В карточку</Link>
      </CardActions>
    </Card>
  );
};

export { PersonCard };
