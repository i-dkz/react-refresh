import { List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import useGames from "../hooks/useGames";


const GameGrid = () => {
  const {games, error} = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List spacing={3}>
        {games &&
          games.map((game) => (
            <ListItem key={game.id}>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {game.name}
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GameGrid;
