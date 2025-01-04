import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { SearchDropdownProps } from "@/types";
import { Avatar, Box, Card, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dropdown({ query, noResults, openSearch, handleCloseSearch, queryResultsData }: SearchDropdownProps) {
    return (
        <Box
            width="100%"
            minHeight="auto"
            position="absolute"
            zIndex="3"
            top="2.6rem"
            left="0"
            background="gray.50"
            borderRadius="sm"
            maxHeight="558px"
            overflowY="scroll"
            display={openSearch ? "block" : "none"}
        >
            {noResults && (
                <Heading size="sm" paddingTop="3" paddingLeft="4" paddingBottom="0">
                    <Text as="span" fontWeight="bold" className="text-gray-500" textDecoration="underline">
                        {query}
                    </Text>{" "}
                    returned {queryResultsData.length} {queryResultsData.length === 1 ? "result" : "results"}
                </Heading>
            )}

            <SimpleGrid minChildWidth="450px" columns={[1, 2]} gap="1">
                {queryResultsData.map((event) => {
                    return (
                        <Card.Root
                            key={event.id}
                            bg="gray.50"
                            border="none"
                            width="100%"
                            maxWidth="400px"
                            margin="4"
                            display="flex"
                            zIndex={3}
                            transition="background 0.1s ease-in-out"
                            _hover={{ bg: "gray.100" }}
                        >
                            <Link to={`/event/${event.id}`} key={event.id} state={{ event }} onClick={handleCloseSearch}>
                                <Card.Body>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Avatar.Root key={event.id}>
                                            <Avatar.Image src={event.image} />
                                        </Avatar.Root>
                                        <Card.Description fontWeight="bold" display="flex" alignItems="center" gap={1}>
                                            <Calendar size={13} /> {dayjs(event.date).format("MMMM D, YYYY")}
                                        </Card.Description>
                                    </Box>
                                    <Card.Title fontWeight="bold">{event.title}</Card.Title>
                                    <Card.Description truncate={true}>{event.description}</Card.Description>
                                </Card.Body>
                            </Link>
                        </Card.Root>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
}
