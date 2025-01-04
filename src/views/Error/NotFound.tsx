import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="68vh"
      padding="0 3rem"
    >
      <Text fontWeight="bold" textTransform="uppercase" fontSize="xl">
        404 Not Found
      </Text>
      <Text as="p" fontSize="md">
        The page you requested was not found.
      </Text>{" "}
      <Link
        to="/"
        className="text-blue-800 font-bold underline hover:no-underline"
      >
        Back to the homepage
      </Link>
    </Box>
  );
};

export default NotFound;
