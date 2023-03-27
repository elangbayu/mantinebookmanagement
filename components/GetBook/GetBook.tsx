import { Title, Text, Container } from '@mantine/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useStyles from '../Welcome/Welcome.styles';

type TBookProps = {
  id: string;
  title: string;
  author: string;
  category: string;
};

export function GetBook() {
  const { classes } = useStyles();

  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<TBookProps>();

  useEffect(() => {
    axios
      .get(`https://2089-2001-448a-4046-239d-6dfb-73ae-ee9b-db1.ap.ngrok.io/book?id=${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="gradient" gradient={{ from: 'teal', to: 'blue' }} component="span">
          Your Book
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This is the detail of your book.
      </Text>
      <Container my="xl">
        <Title align="center" order={1}>
          {book?.title}
        </Title>
        <Title align="center" order={2}>
          {book?.author}
        </Title>
        <Title align="center" order={2}>
          {book?.category}
        </Title>
      </Container>
    </>
  );
}
