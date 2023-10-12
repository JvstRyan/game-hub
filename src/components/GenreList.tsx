import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react'
import useGenres from '../Hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GenreCardSkeleton from './GenreCardSkeleton'
import GameCardContainer from './GameCardContainer'


const GenreList = () => {
const {data, isLoading, error} = useGenres()
const genreskeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]

if(error) return null
  return (
  <>
    <List>
      {isLoading && genreskeletons.map((skeleton) =><GenreCardSkeleton key={skeleton}></GenreCardSkeleton> )}
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'><HStack>
          <Image boxSize='32px'borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
          <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack></ListItem>)}
    </List>
  </>
  )
}

export default GenreList