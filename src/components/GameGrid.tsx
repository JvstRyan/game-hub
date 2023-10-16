import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";
import { GameQuery } from "../App";


interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="15px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
         <GameCardContainer key={skeleton}><GameCardSkeleton></GameCardSkeleton></GameCardContainer>
          ))}
        {data.map((games) => (
         <GameCardContainer key={games.id}>
           <GameCard game={games} />
         </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
