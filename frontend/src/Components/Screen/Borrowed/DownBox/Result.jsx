import React from 'react'
import st from './Result.module.css';
import { Card, CardHeader, CardBody, CardFooter, Text, Image, Stack, Heading, Divider, Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import StarRatings from 'react-star-ratings';
import { BsJournalBookmark } from "react-icons/bs";
const Result = (props) => {
  return (
    <div className={st.par}>
      {props.searchResults.map((e, ind) => (
        <Card maxW='sm' key={ind}>
          <CardBody>
            <Image
              boxSize='200px'
              objectFit='contain'
              src={e.book.poster}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='7' spacing='3' alignItems={'center'} display={'flex'}  >
              <div className={st.booktxt}>{e.book.book_name}</div>
              <Text size={'sm'} className={st.booksub}>
                Rental Date : {e.rentalDate.slice(0, 10)}
                <br></br>
                Expires On : {e.expiryDate.slice(0, 10)}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing='2' w={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'2'}>

              <ButtonGroup size='sm' isAttached variant='outline'>
                <Button w={'80%'} >Return Book </Button>
                <IconButton aria-label='Add to friends' icon={<BsJournalBookmark />} />
              </ButtonGroup>
            </ButtonGroup>
          </CardFooter>
        </Card>
      )
      )}
    </div>
  )
}

export default Result
