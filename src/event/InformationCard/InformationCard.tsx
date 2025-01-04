import { Alert } from "@/components/ui/alert";
import { Box, Heading } from "@chakra-ui/react";

export default function InformationCard() {
    return (
        <Box margin="2rem 0rem 2rem 0" lg={{ margin: "0 6rem 0 0" }}>
            <Alert status="info" gap="2">
                <Heading margin="0 0rem 0.2rem 0" as="h1" size="xs" textTransform="uppercase">
                    Event Information
                </Heading>
                <Box margin="0 0 0.2rem 0">Arrive 30 minutes before the start of the event</Box>
                <Box margin="0 0 0.2rem 0">Tickets are non-refundable</Box>
                <Box margin="0 0 0.2rem 0">Valid photo ID required</Box>
            </Alert>
        </Box>
    );
}
