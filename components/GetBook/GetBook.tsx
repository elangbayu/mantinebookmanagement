import { Title, Text } from '@mantine/core';
import useStyles from '../Welcome/Welcome.styles';

export function GetBook() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        {' '}
        <Text inherit variant="gradient" gradient={{ from: 'teal', to: 'blue' }} component="span">
          Your Book
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This is the detail of your book.
      </Text>
    </>
  );
}
