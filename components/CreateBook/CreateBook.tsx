import { Title, Text, TextInput, Select, Box, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import useStyles from '../Welcome/Welcome.styles';

type TBookProps = {
  judul: string;
  penulis: string;
  kategori: string;
};

export function CreateBook() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      judul: '',
      penulis: '',
      kategori: '',
    },
  });

  const onHandlerSubmit = (values: TBookProps) => {
    axios
      .post('https://2089-2001-448a-4046-239d-6dfb-73ae-ee9b-db1.ap.ngrok.io/book', values)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        {' '}
        <Text inherit variant="gradient" component="span">
          Create New Book
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Create your new book! Provide a title, author, and choose a category.
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
