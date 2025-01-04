import dayjs from "dayjs";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { type Event } from "@/types";
import { MapPin, Ticket, Calendar } from "lucide-react";
import { Card, Box, Text, Image, Badge, DialogBackdrop } from "@chakra-ui/react";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

export type EventDetailProps = {
    event: Event;
    blur: string;
};

export default function EventDetails({ event, blur }: EventDetailProps) {
    return (
        <Card.Root key={event.id} data-testid="event-details" bg="gray.50" border="none" maxWidth="475px">
            {event.reserved.userId === 1 && (
                <Fragment>
                    <DialogRoot>
                        <DialogBackdrop />
                        <DialogTrigger>
                            <Badge
                                onClick={() => console.log("reserved")}
                                position="absolute"
                                zIndex={1}
                                top="1rem"
                                right="1rem"
                                bgColor="black"
                                color="white"
                                cursor="pointer"
                                _active={{ bgColor: "blackAlpha.700" }}
                            >
                                Reserved
                            </Badge>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogCloseTrigger />
                            <DialogHeader>
                                <DialogTitle />
                            </DialogHeader>
                            <DialogBody />
                            <DialogFooter />
                        </DialogContent>
                    </DialogRoot>
                </Fragment>
            )}
            <Link
                to={`/event/${event.title.split(" ").join("-").toLowerCase()}`}
                style={{ overflow: "hidden", height: "196px" }}
                state={{ event }}
            >
                <Image
                    src={event.image}
                    alt="Event Image"
                    filter={blur}
                    md={{ borderTopLeftRadius: "lg", borderTopRadius: "lg" }}
                    _hover={{ opacity: "0.9", transition: "all 0.3s ease" }}
                />
            </Link>
            <Card.Body>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Card.Title fontWeight="bold">{event.title}</Card.Title>
                    <Badge bgColor="green.50" color="green.700" fontWeight="bold" fontSize="xs">
                        ${event.price}
                    </Badge>
                </Box>
                <Card.Description display="flex" alignItems="center" gap="1" margin="0.2rem 0">
                    <MapPin size={13} />
                    <Text as="span">{event.location}</Text>
                </Card.Description>
                <Card.Description display="flex" alignItems="center" gap="1" margin="0.2rem 0">
                    <Calendar size={13} />
                    <Text as="span">{dayjs(event.date).format("MMM DD, YYYY")}</Text>
                </Card.Description>
                <Card.Description display="flex" alignItems="center" gap="1" margin="0.2rem 0">
                    <Ticket size={13} />
                    <Text as="span">{event.tickets}</Text>
                    {event.reserved.userId === 1 ? (
                        <Text as="span" color="yellow.600">
                            (1 person trying to buy)
                        </Text>
                    ) : null}
                </Card.Description>
                <Card.Description truncate={true}>{event.description}</Card.Description>
            </Card.Body>
        </Card.Root>
    );
}
