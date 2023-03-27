import { Title, Text, TextInput, Select, Box, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import useStyles from '../Welcome/Welcome.styles';

export function CreateBook() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      title: '',
      author: '',
      category: '',
    },
  });

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
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            label="Title"
            placeholder="Harry Potter"
            classNames={classes}
            data-cy="book-title"
            {...form.getInputProps('title')}
          />
          <TextInput
            label="Author"
            placeholder="JK Rowling"
            classNames={classes}
            data-cy="book-author"
            {...form.getInputProps('author')}
          />
          <Select
            mt="md"
            withinPortal
            data={['Romance', 'Fantasy', 'Science', 'Fiction']}
            placeholder="Choose category"
            label="Category"
            classNames={classes}
            data-cy="book-category"
            {...form.getInputProps('category')}
          />
          <Group position="center" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
