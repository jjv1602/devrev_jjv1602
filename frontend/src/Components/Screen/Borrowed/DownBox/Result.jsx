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
              src={e.book.poster}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='7' spacing='3'>
              <Heading size='sm' textAlign={"center"}>{e.book.book_name}</Heading>
              <Text>
                Rental Date : {e.rentalDate.slice(0, 10)}
                Expiry Date : {e.expiryDate.slice(0, 10)}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button size="xs" variant='solid' colorScheme='blue'>
                Return Book 
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
