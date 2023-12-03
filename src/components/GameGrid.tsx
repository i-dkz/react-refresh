import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} p={4}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer children={<CardSkeleton key={skeleton} />} />
          ))}
        {games.map((game) => (
          <GameCardContainer
            children={<GameCard key={game.id} game={game} />}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
