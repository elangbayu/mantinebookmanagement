import { Group, Button } from '@mantine/core';

export function Menu() {
  return (
    <>
      <Group position="center" mt="xl">
        <Button component="a" href="/create" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} data-cy="add-book-button">
          Add New Book
        </Button>
        <Button component="a" href="/books" variant="gradient" gradient={{ from: 'teal', to: 'lime' }} data-cy="get-all-book-button">
          List All Books
        </Button>
        <Button component="a" href="/book" variant="gradient" gradient={{ from: 'teal', to: 'blue' }} data-cy="get-book-button">
          Get Book Detail
        </Button>
        <Button component="a" href="/update" variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69' }} data-cy="update-book-button">
          Update Book
        </Button>
        <Button component="a" href="/delete" variant="gradient" gradient={{ from: 'orange', to: 'red' }} data-cy="delete-book-button">
          Delete Book
        </Button>
      </Group>
    </>
  );
}
