import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

import { useGetCharacterByIdQuery } from "../../redux/slices/starWarsApi";

const CharacterCard = () => {
  let { userId } = useParams();
  const { data, isLoading } = useGetCharacterByIdQuery(userId || "");

  if (isLoading) return null;

  return (
    <main>
      <figure>
        <img src={data.image} alt={data.name} />
        <figcaption>{data.name}</figcaption>
      </figure>
    </main>
  );
};

export default CharacterCard;
