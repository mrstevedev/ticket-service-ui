import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Event, EventsProps } from "@/types";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Box, Text, HStack, Stack } from "@chakra-ui/react";
import EventDetails from "@/components/events/EventDetails";

export default function EventsList({ events, blur }: EventsProps) {
    return (
        <Fragment>
            {!events &&
                Array.from({ length: 12 }).map(() => (
                    <Stack gap="4" maxW="sm" key={Math.random()}>
                        <Skeleton height="196px" />
                        <HStack width="xl" marginTop={"1rem"}>
                            <SkeletonText width="100%" noOfLines={1} />
                            <SkeletonText width="1/6" noOfLines={1} />
                        </HStack>
                        <HStack width="full">
                            <SkeletonText width="100%" noOfLines={1} />
                        </HStack>
                        <HStack width="full">
                            <SkeletonText width="100%" noOfLines={1} />
                        </HStack>
                        <HStack width="full">
                            <SkeletonText width="100%" noOfLines={1} />
                        </HStack>
                        <HStack width="full">
                            <SkeletonText width="100%" noOfLines={1} />
                        </HStack>
                    </Stack>
                ))}
            {events?.length === 0 && (
                <Fragment>
                    <Box width="100%" height="100%" margin="5rem 0">
                        <Text fontSize="3xl" fontWeight="bold" color="gray.900">
                            No events found
                        </Text>
                        <Text fontSize="lg" fontWeight="bold" color="gray.400" className="mt-1">
                            Add an event{" "}
                            <Link className="font-bold text-blue-500 underline hover:no-underline" to="/sell-tickets">
                                here
                            </Link>
                        </Text>
                    </Box>
                </Fragment>
            )}
            {events?.map((event: Event) => {
                return <EventDetails key={event.id} event={event} blur={blur} />;
            })}
        </Fragment>
    );
}
