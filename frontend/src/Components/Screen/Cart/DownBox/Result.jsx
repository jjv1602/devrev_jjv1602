import React from 'react'
import st from './Result.module.css';
import { Card, CardHeader, CardBody, CardFooter, Text, Image, Stack, Heading, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import StarRatings from 'react-star-ratings';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';

const Result = (props) => {
  const toast = useToast();
  const rentbook = async (book_id) => {
    try {
      const currentDate = new Date();

      // Format the date in YYYY-MM-DD format
      const rentalDate = currentDate.toISOString().split('T')[0];

      // Calculate the expiry date (30 days from the current date)
      const exp = new Date(currentDate);
      exp.setDate(currentDate.getDate() + 30);

      // Format the expiry date in YYYY-MM-DD format
      const expiryDate = exp.toISOString().split('T')[0];

      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      // const token = userInfo.token;
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGU4YWM4MThmNTQwMjY4ZjI5OTIxMCIsImlhdCI6MTY5NTQ1MTg0OSwiZXhwIjoxNjk4MDQzODQ5fQ.Smw3HGAeq2FwMCHj6SxVx9U6V0dTSlHaB-8-zCqzmaQ"
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,   //only Bearer token is accepted so we send token
        },
      };
      const { data } = await axios.put("/api/books/rent", { book_id, rentalDate, expiryDate }, config);
      toast({
        title: 'Book Rented You Can Check in Borrowed Section',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      props.typing();
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className={st.par}>
      {props.searchResults.map((e, ind) => (
        <Card key={e._ind}
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          margin={"20px"}
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '120px' }}
            src={e.poster}
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <div className={st.booktxt}>{e.book_name}</div>
              <div className={st.date}><div className={st.booksub}>Author  : </div>&nbsp;{e.book_author}</div>
              <div className={st.date}><div className={st.booksub}>Genre : </div>&nbsp;{e.book_genre}</div>
              <div className={st.date}><div className={st.booksub}>Publish Date : </div>&nbsp;{e.publish_date.slice(0, 10)}</div>
              <br></br>
              <Button backgroundColor="#164bea" color="white" size='sm' onClick={() => rentbook(e._id)} >
                Rent Book
              </Button>
            </CardBody>
            <CardFooter>

            </CardFooter>
          </Stack>
        </Card>
      )
      )}
    </div>
  )
}

export default Result
