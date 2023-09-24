import React, { useState } from 'react'
import st from './Result.module.css';
import {
  Card, CardHeader, CardBody, CardFooter, Text, Image, Stack, Heading, Divider, Button, ButtonGroup, Flex, Badge, IconButton, useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import StarRatings from 'react-star-ratings';
import { BsCart2 } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
const Result = (props) => {
  const toast = useToast();
  const addtocart = async (book_id) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const token = userInfo.token;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,   //only Bearer token is accepted so we send token
        },
      };
      const { data } = await axios.put("/api/books/wishlist", { book_id }, config);
      toast({
        title: 'Book Added to cart',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error.message);
    }
  }
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
      const token = userInfo.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,   //only Bearer token is accepted so we send token
        },
      };
      const { data } = await axios.put("/api/books/rent", { book_id,rentalDate,expiryDate }, config);
      toast({
        title: 'Book Rented You Can Check in Borrowed Section',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  // console.log(props.searchResults)
  const [isOpen, setIsOpen] = useState({});

  // Function to open a modal for a specific book
  const openModal = (bookId) => {
    setIsOpen({ ...isOpen, [bookId]: true });
  };

  // Function to close a modal for a specific book
  const closeModal = (bookId) => {
    setIsOpen({ ...isOpen, [bookId]: false });
  };
  return (
    <div className={st.par}>
      {props.searchResults.map((e, ind) => (
        <Card maxW='md' key={ind} >
          <CardBody>
            <Image
              boxSize='200px'
              objectFit='contain'
              src={e.poster}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='7' alignItems={'center'} display={'flex'} >
              <div className={st.booktxt}>{e.book_name}</div>
              <Text>
              </Text>
              <StarRatings
                textAlign={"center"}
                rating={e.rating}
                starRatedColor="golden"
                numberOfStars={5}
                starDimension="16px"
              />
              <Badge mt={'2'} colorScheme='green' id={st['badge']}>Rent for 30 Days</Badge>
            </Stack>
          </CardBody>
          <CardFooter  >
            <ButtonGroup spacing='2' w={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'2'}>
              <Button onClick={() => openModal(e._id)} w={'80%'} size='sm' ml='5'>More Details</Button>

              <Modal isOpen={isOpen[e._id]} onClose={() => closeModal(e._id)}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader textAlign={'center'}>{e.book_name}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Image
                      boxSize='200px'
                      objectFit='contain'
                      src={e.poster}
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                      mb={'5'}

                    />
                    <div className={st.modpar}>
                      <div className={st.modh}><div className={st.modb}>Author :</div>&nbsp; {e.book_author}</div>
                      <div className={st.modh}><div className={st.modb}>Genre  :</div>&nbsp; {e.book_genre}</div>
                      <div className={st.modh}><div className={st.modb}>Total Copies :</div>&nbsp; {e.total_copies}</div>
                      <div className={st.modh}><div className={st.modb}>Rating :</div>&nbsp; {e.rating} </div>
                    </div>
                  </ModalBody>

                  <ModalFooter>

                  </ModalFooter>
                </ModalContent>
              </Modal>

              <ButtonGroup size='sm' isAttached variant='outline'>
                <Button w={'80%'} onClick={() => addtocart(e._id)}>Add to Cart</Button>
                <IconButton aria-label='Add to friends' icon={<BsCart2 />} />
              </ButtonGroup>

              <ButtonGroup size='sm' isAttached variant='outline'>
                <Button w={'80%'} onClick={() => rentbook(e._id)}>Rent Book </Button>
                <IconButton aria-label='Add to friends' icon={<BiBookAdd />} />
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
