import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} p={4}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer children={<CardSkeleton key={skeleton} />} />
          ))}
        {data.map((data) => (
          <GameCardContainer
            children={<GameCard key={data.id} game={data} />}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
