import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <GenreSkeleton />;

  if (error) return null;

  return (
    <>
      <Heading ml={8} mb={4} fontSize={"2xl"}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"} justifyContent={"center"}>
            <HStack>
              <Image
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Button
                colorScheme={
                  genre.id === selectedGenre?.id ? "teal" : undefined
                }
                onClick={() => onSelectGenre(genre)}
                fontSize={"md"}
              >
                {genre.name === "Massively Multiplayer" ? "MMO" : genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
