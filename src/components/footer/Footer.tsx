import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box as="footer" position="fixed" width="100%" bottom="0" padding="1rem" bgColor="black" color="white">
            <Text fontWeight="bold" fontSize="sm">
                &copy; 2024 | Eventify
            </Text>
        </Box>
    );
}
