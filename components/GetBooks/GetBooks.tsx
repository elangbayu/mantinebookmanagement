import { Title, Text, Table, Container, Button } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useStyles from '../Welcome/Welcome.styles';
import Link from 'next/link';
import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons';

type TBookProps = {
  id: string;
  title: string;
  author: string;
  category: string;
};

export function GetBooks() {
  const { classes } = useStyles();

  const [books, setBooks] = useState<Array<TBookProps>>([]);

  useEffect(() => {
    axios
      .get('https://2089-2001-448a-4046-239d-6dfb-73ae-ee9b-db1.ap.ngrok.io/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  const onDeleteBook = (id: string) => {
    axios
      .delete(`https://2089-2001-448a-4046-239d-6dfb-73ae-ee9b-db1.ap.ngrok.io/book?id=${id}`)
      .then(function (response) {
        notifications.show({
          id: 'success-create',
          withCloseButton: true,
          autoClose: 5000,
          title: 'Success',
          message: 'Berhasil menghapus buku',
          color: 'blue',
          loading: false,
        });
      })
      .catch(function (error) {
        notifications.show({
          id: 'error-create',
          withCloseButton: true,
          autoClose: 5000,
          title: 'Error',
          message: 'Gagal menghapus buku',
          color: 'red',
          icon: <IconX />,
          loading: false,
        });
      });
  };

  const rows = books.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td style={{ textAlign: 'center' }}>{item.title}</td>
      <td style={{ textAlign: 'center' }}>{item.author}</td>
      <td style={{ textAlign: 'center' }}>{item.category}</td>
      <td style={{ textAlign: 'center' }}>
        <Link href={`/books/${item.id}`}>
          <Button mr="lg">Detail</Button>
        </Link>
        <Link href={`/books/${item.id}/update`}>
          <Button mr="lg" color="green">
            Update
          </Button>
        </Link>
        <Button onClick={() => onDeleteBook(item.id)} color="red" variant="outline">
          Delete
        </Button>
      </td>
    </tr>
  ));

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
              <th style={{ textAlign: 'center' }}>Title</th>
              <th style={{ textAlign: 'center' }}>Author</th>
              <th style={{ textAlign: 'center' }}>Category</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    </>
  );
}
