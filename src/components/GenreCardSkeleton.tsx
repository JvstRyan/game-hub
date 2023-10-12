import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GenreCardSkeleton = () => {
  return (
    <Card marginTop='20px'>
        <Skeleton width='80px' height='40px'/>
    </Card>
  )
}

export default GenreCardSkeleton