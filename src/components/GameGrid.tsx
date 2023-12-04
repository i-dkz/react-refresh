import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({selectedGenre} : Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3} p={4}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} children={<CardSkeleton />} />
          ))}
        {data.map((data) => (
          <GameCardContainer key={data.id}
            children={<GameCard  game={data} />}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
