import { Box, Heading, Text } from "@chakra-ui/react";

export default function Account() {
    return (
        <Box padding="3rem 0 0 0">
            <Heading as="h3" size="lg" margin="1rem 0 0 0">
                Account
            </Heading>
            <Text as="p">My account details.</Text>
        </Box>
    );
}
