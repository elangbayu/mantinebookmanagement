import { Title, Text } from '@mantine/core';
import useStyles from '../Welcome/Welcome.styles';

export function GetBooks() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        {' '}
        <Text inherit variant="gradient" gradient={{ from: 'teal', to: 'lime' }} component="span">
          Your Books
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Below is list of all your books.
      </Text>
    </>
  );
}
