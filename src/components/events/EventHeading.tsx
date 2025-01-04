import { Box, Heading, Text } from "@chakra-ui/react";

export default function EventHeading() {
    return (
        <Box>
            <Heading as="h1" size="xl" margin="0.3rem 0">
                Upcoming Events
            </Heading>
            <Text as="p" margin="0 0 1rem 0">
                Discover <span style={{ fontFamily: "Love Light", fontSize: "1.4rem" }}>&</span> book tickets for amazing events
            </Text>
        </Box>
    );
}
