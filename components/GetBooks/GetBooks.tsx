import { Title, Text, Table, Container, Button } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useStyles from '../Welcome/Welcome.styles';
import Link from 'next/link';

type TBookProps = {
  id: string;
  title: string;
  author: string;
  category: string;
};

export function GetBooks() {
  const { classes } = useStyles();

  const [books, setBooks] = useState<Array<TBookProps>>([]);

  const rows = books.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>{item.category}</td>
      <td>
        <Link href={`/books/${item.id}`}>
          <Button mr="lg">Detail</Button>
        </Link>
        <Link href={`/books/${item.id}/update`}>
          <Button mr="lg" color="green">
            Update
          </Button>
        </Link>
        <Button color="red" variant="outline">
          Delete
        </Button>
      </td>
    </tr>
  ));

  useEffect(() => {
    axios
      .get('https://2089-2001-448a-4046-239d-6dfb-73ae-ee9b-db1.ap.ngrok.io/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="gradient" gradient={{ from: 'teal', to: 'lime' }} component="span">
          Your Books
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Below is list of all your books.
      </Text>

      <Container my="xl">
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    </>
  );
}
