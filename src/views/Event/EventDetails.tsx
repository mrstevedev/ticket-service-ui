import dayjs from "dayjs";
import { useState } from "react";
import { ArrowLeft, CircleX, MoveRight } from "lucide-react";
import { EventDetailProps } from "@/types";
import { Collapsible } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { Calendar, MapPin, Ticket, DollarSign } from "lucide-react";
import { Box, Card, Text, Image, Badge, Heading, SimpleGrid, IconButton, Button } from "@chakra-ui/react";
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from "@/components/ui/breadcrumb";
import InformationCard from "@/event/InformationCard/InformationCard";

export default function EventDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const { event } = location.state as EventDetailProps;

    const [blur, setBlur] = useState("blur(4px)");

    setTimeout(() => setBlur("none"), 1000);

    return (
        <Box padding="3rem 0 0 0">
            <BreadcrumbRoot>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
                <BreadcrumbLink href="#">Event</BreadcrumbLink>
                <BreadcrumbCurrentLink>Orgy Concert</BreadcrumbCurrentLink>
            </BreadcrumbRoot>

            <IconButton
                onClick={() => navigate(-1)}
                aria-label="Back"
                size="md"
                rounded="full"
                variant="ghost"
                margin="1rem 0 0 0"
            >
                <ArrowLeft width={18} color="black" cursor="pointer" />
            </IconButton>

            <Box
                overflow="hidden"
                height="400px"
                borderTopLeftRadius={"2xl"}
                borderTopRightRadius={"2xl"}
                margin="1rem 0 1rem 0"
                className="event-img"
                filter={blur}
                _hover={{ opacity: "0.9", transition: "all 0.3s ease-in-out" }}
                background={`url(${event.image}) no-repeat center center / cover`}
            ></Box>
            <SimpleGrid columns={[1, 2]} margin={"2rem 0"}>
                <Box>
                    <Heading as="h1" size="md" margin="0.3rem 0" textTransform="uppercase">
                        {event.title}
                    </Heading>
                    <Text lineHeight={1.7} as="p" margin="0 0 2rem 0" className="event-details">
                        {event.description}
                    </Text>

                    <SimpleGrid columns={[2, 2]}>
                        <Box>
                            <Heading
                                display="flex"
                                alignItems="center"
                                gap="1"
                                as="h1"
                                size="xs"
                                margin="0.3rem 0"
                                textTransform="uppercase"
                            >
                                <MapPin size={14} /> Location
                            </Heading>
                            <Text fontSize="xs" lineHeight={1.7} as="p" margin="0 0 2rem 0" className="event-details">
                                {event.location}
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                display="flex"
                                alignItems="center"
                                gap="1"
                                as="h1"
                                size="xs"
                                margin="0.3rem 0"
                                textTransform="uppercase"
                            >
                                <Calendar size={14} /> Date
                            </Heading>
                            <Text fontSize="xs" lineHeight={1.7} as="p" margin="0 0 2rem 0" className="event-details">
                                {dayjs(event.date).format("MMM DD, YYYY")}
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                display="flex"
                                alignItems="center"
                                gap="1"
                                as="h1"
                                size="xs"
                                margin="0.3rem 0"
                                textTransform="uppercase"
                            >
                                <Ticket size={14} /> Tickets Available
                            </Heading>
                            <Text fontSize="xs" lineHeight={1.7} as="p" margin="0 0 2rem 0" className="event-details">
                                {event.tickets}
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                display="flex"
                                alignItems="center"
                                gap="0"
                                as="h1"
                                size="xs"
                                margin="0.3rem 0"
                                textTransform="uppercase"
                            >
                                <DollarSign size={12} />
                                Price
                            </Heading>
                            <Text fontSize="xs" lineHeight={1.7} as="p" margin="0 0 2rem 0" className="event-details">
                                ${event.price}
                            </Text>
                        </Box>
                    </SimpleGrid>
                    <InformationCard />
                </Box>

                <Card.Root border="none" width="100%" maxWidth="600px" bg="gray.50">
                    <Box
                        overflow="hidden"
                        height="200px"
                        borderTopLeftRadius={"2xl"}
                        borderTopRightRadius={"2xl"}
                        className="event-img"
                    >
                        <Image
                            src={event.image}
                            alt="Event Image"
                            width="100%"
                            filter={blur}
                            _hover={{ opacity: "0.9", transition: "all 0.3s ease-in-out" }}
                        />
                    </Box>
                    <Card.Body>
                        <Box display="flex" justifyContent="space-between">
                            <Card.Title fontWeight="bold">{event.title}</Card.Title>
                            <Badge bgColor="green.50" color="green.700" fontWeight="bold" fontSize="xs">
                                ${event.price}
                            </Badge>
                        </Box>
                        <Card.Description display="flex" alignItems="center" gap="1" margin="0.4rem 0">
                            <MapPin size={14} /> {event.location}
                        </Card.Description>
                        <Card.Description display="flex" alignItems="center" gap="1" margin="0.4rem 0">
                            <Calendar size={14} /> {dayjs(event.date).format("MMM DD, YYYY")}
                        </Card.Description>
                        <Card.Description display="flex" alignItems="center" gap="1" margin="0.4rem 0">
                            <Ticket size={14} /> {event.tickets}{" "}
                            {event.reserved.userId === 1 ? (
                                <Text as="span" color="yellow.600">
                                    (1 person trying to buy)
                                </Text>
                            ) : null}
                        </Card.Description>
                        <Card.Description truncate={true} margin="0.4rem 0">
                            {event.description}
                        </Card.Description>

                        <Collapsible.Root>
                            <Collapsible.Trigger asChild>
                                <Button
                                    bg={"blue.800"}
                                    width="100%"
                                    marginTop="1rem"
                                    fontWeight="black"
                                    _hover={{ opacity: "0.9", transition: "all 0.3s ease-in-out" }}
                                >
                                    Reserve Ticket
                                </Button>
                            </Collapsible.Trigger>
                            <Collapsible.Content>
                                <Card.Body margin="0.4rem 0">
                                    <Card.Title display="flex" alignItems="normal" gap="3">
                                        <Box
                                            bg="yellow.100"
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            width="50px"
                                            height="50px"
                                            borderRadius="full"
                                        >
                                            <Ticket size={23} />
                                        </Box>
                                        <Box>
                                            <Heading fontSize="xl" as="p">
                                                Ticket Reserved
                                            </Heading>
                                            <Text
                                                color="gray.500"
                                                fontSize="xs"
                                                lineHeight={1.2}
                                                fontWeight="normal"
                                                as="p"
                                                margin="0 0 1rem 0"
                                            >
                                                Expires in 29 minutes 59 seconds
                                            </Text>
                                        </Box>
                                    </Card.Title>
                                    <Card.Description display="flex" alignItems="center" gap="1">
                                        A ticket has been reserved for you. Complete your purchase before your time expires to
                                        secure your spot at this event.
                                    </Card.Description>

                                    <Button
                                        bg={"blue.500"}
                                        width="100%"
                                        marginTop="1rem"
                                        fontWeight="black"
                                        _hover={{ opacity: "0.9", transition: "all 0.3s ease-in-out" }}
                                    >
                                        Purchase your ticket now
                                        <MoveRight size={16} />
                                    </Button>

                                    <Button
                                        bg={"red.500"}
                                        width="100%"
                                        marginTop="1rem"
                                        fontWeight="black"
                                        _hover={{ opacity: "0.9", transition: "all 0.3s ease-in-out" }}
                                    >
                                        <CircleX size={16} />
                                        Release Ticket Offer
                                    </Button>
                                </Card.Body>
                            </Collapsible.Content>
                        </Collapsible.Root>
                    </Card.Body>
                </Card.Root>
            </SimpleGrid>
        </Box>
    );
}
