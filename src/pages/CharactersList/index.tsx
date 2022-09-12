import { useRef, useState } from "react";
import { TextField, Container, Box, Pagination } from "@mui/material";

import { useGetCharactersQuery } from "../../redux/slices/starWarsApi";
import { HomeIcon } from "../../assets/HomeIcon";
import { PersonCard } from "../../components/PersonCard";

const CharactersList = () => {
  const searchInput = useRef<HTMLInputElement>(null);

  const [page, setPageSize] = useState(1);
  const [searchName, setSearchName] = useState("");

  const { data: Characters, isLoading } = useGetCharactersQuery({
    page,
    name: searchName,
  });

  const handleChange = (_e: any, newPage: number) => {
    setPageSize(newPage);
  };

  console.log(Characters);
  if (!Characters) return <HomeIcon fontSize="large" />;

  return (
    <Container>
      <Box m="16px 0">
        <TextField
          id="outlined-basic"
          label="Поиск по имени"
          variant="outlined"
          ref={searchInput}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          alignContent: "space-between",
          justifyContent: "space-between",
          padding: "6px",
          gap: "16px",
          justifyItems: "stretch",
          gridTemplateColumns: "repeat(4, 160px)",
        }}
      >
        {Characters.results.map((item: any) => {
          return (
            <PersonCard
              image={item.image}
              name={item.name}
              species={item.species}
              id={item.id}
            />
          );
        })}
      </Box>

      <div>
        <Pagination
          count={Math.round(Characters.info.count / 20)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </Container>
  );
};

export default CharactersList;
