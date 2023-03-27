import { Title, Text } from '@mantine/core';
import useStyles from '../Welcome/Welcome.styles';

export function UpdateBook() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        {' '}
        <Text inherit variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69' }} component="span">
          Update Your Book
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Update your book by providing book ID and all the new details.
      </Text>
    </>
  );
}
