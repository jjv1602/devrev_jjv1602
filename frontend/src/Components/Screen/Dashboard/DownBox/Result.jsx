import React from 'react'
import st from './Result.module.css';
import { Card, CardHeader, CardBody, CardFooter, Text, Image, Stack, Heading, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import StarRatings from 'react-star-ratings';
const Result = (props) => {
  return (
    <div className={st.par}>
      {props.searchResults.map((e, ind) => (
        <Card maxW='sm'>
          <CardBody>
            <Image
              boxSize='200px'
              objectFit='cover'
              src={e.poster}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='7' spacing='3'>
              <Heading size='sm' textAlign={"center"}>{e.book_name}</Heading>
              <Text>
              </Text>
              <StarRatings
                rating={e.rating}
                starRatedColor="blue"
                numberOfStars={5}
                starDimension="16px"
              />
              <Text fontSize='md'><bold>Total Copies Left :</bold>{e.total_copies- e.rentedby.length}</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button size="xs" variant='solid' colorScheme='blue'>
                Rent Now
              </Button>
              <Button size="xs" variant='ghost' colorScheme='blue'>
                View 
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      )
      )}
    </div>
  )
}

export default Result
