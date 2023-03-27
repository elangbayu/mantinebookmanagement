import { Title, Text, TextInput, Select, Box, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStyles from '../Welcome/Welcome.styles';

type TBookProps = {
  judul: string;
  penulis: string;
  kategori: string;
};

export function UpdateBook() {
  const { classes } = useStyles();

  const router = useRouter();
  const { id } = router.query;

  const form = useForm({
    initialValues: {
      judul: '',
      penulis: '',
      kategori: '',
    },
  });

  useEffect(() => {
    axios
      .get(`https://2089-2001-448a-4046-239d-6dfb-73ae-ee9b-db1.ap.ngrok.io/book?id=${id}`)
      .then((response) => {
        const { data } = response;
        const values = {
          judul: data.title,
          penulis: data.author,
          kategori: data.category,
        };
        form.setValues(values);
      })
      .catch((error) => console.log(error));
  }, []);

  const onHandlerSubmit = (values: TBookProps) => {
    axios
      .put(`https://2089-2001-448a-4046-239d-6dfb-73ae-ee9b-db1.ap.ngrok.io/book/${id}`, values)
      .then(function (response) {
        notifications.show({
          id: 'success-update',
          withCloseButton: true,
          autoClose: 5000,
          title: 'Success',
          message: 'Berhasil mengupdate buku',
          color: 'blue',
          loading: false,
        });
      })
      .catch(function (error) {
        notifications.show({
          id: 'error-update',
          withCloseButton: true,
          autoClose: 5000,
          title: 'Error',
          message: 'Gagal mengupdate buku',
          color: 'red',
          icon: <IconX />,
          loading: false,
        });
      });
  };

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text
          inherit
          variant="gradient"
          gradient={{ from: '#ed6ea0', to: '#ec8c69' }}
          component="span"
        >
          Update Your Book
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Update your book by providing book ID and all the new details.
      </Text>
      <Box maw={580} mx="auto">
        <form onSubmit={form.onSubmit((values) => onHandlerSubmit(values))}>
          <TextInput
            label="Title"
            placeholder="Harry Potter"
            classNames={classes}
            data-cy="book-title"
            my="lg"
            {...form.getInputProps('judul')}
          />
          <TextInput
            label="Author"
            placeholder="JK Rowling"
            classNames={classes}
            mb="lg"
            data-cy="book-author"
            {...form.getInputProps('penulis')}
          />
          <Select
            mt="md"
            withinPortal
            data={['Romance', 'Fantasy', 'Science', 'Fiction']}
            placeholder="Choose category"
            label="Category"
            classNames={classes}
            data-cy="book-category"
            {...form.getInputProps('kategori')}
          />
          <Group position="center" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
