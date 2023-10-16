import { HStack, List, ListItem, Image, Text, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreCardSkeleton from "./GenreCardSkeleton";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genreskeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return null;
  
  return (
    <>
      <List>
        {isLoading &&
          genreskeletons.map((skeleton) => (
            <GenreCardSkeleton key={skeleton}></GenreCardSkeleton>
          ))}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="35px"
                borderRadius={8}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize={"lg"}
                whiteSpace={'normal'}
                textAlign={'left'}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
