import { Title, Text } from '@mantine/core';
import useStyles from '../Welcome/Welcome.styles';

export function DeleteBook() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        {' '}
        <Text inherit variant="gradient" gradient={{ from: 'orange', to: 'red' }} component="span">
          Delete Your Book
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Delete your book by providing its ID.
      </Text>
    </>
  );
}
