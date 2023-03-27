import { Title, Text } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        {' '}
        <Text inherit variant="gradient" component="span">
          Book Management App
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Welcome to Book Management App, this app can manage your books, create new book, get all
        your book detail, get you specific book detail, update your book detail and delete your
        book.
      </Text>
    </>
  );
}
