import { Card, Button, Box, Heading, Text, Image } from "@chakra-ui/react";
import { ArrowLeft, CircleX, MoveRight } from "lucide-react";
import { IconButton } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function Tickets() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <Box margin="3rem 0">
            <IconButton bg="none" _hover={{ bg: "gray.100" }} rounded="full" onClick={handleGoBack}>
                <ArrowLeft color="black" />
            </IconButton>

            <Heading as="h3" size="lg" margin="1rem 0 0 0">
                Reserved Tickets
            </Heading>
            <Text as="p">My currently reserved Tickets.</Text>

            <Card.Root margin="1rem 0" rounded="lg" shadow="xs" maxWidth="375px">
                <Link
                    to={"#"}
                    // style={{ overflow: "hidden", height: "196px" }}
                    // state={{ event }}
                >
                    <Image
                        src={"/images/orgy-img-1.jpg"}
                        alt="Event Image"
                        // filter={blur}
                        md={{ borderTopLeftRadius: "lg", borderTopRadius: "lg" }}
                        _hover={{ opacity: "0.9", transition: "all 0.3s ease" }}
                    />
                </Link>
                <Card.Header>
                    <Heading as="h3" size="md">
                        Event Name
                    </Heading>
                </Card.Header>
                <Card.Body>
                    <Text as="p">Date</Text>
                    <Text as="p">Location</Text>
                    <Text as="p">Price</Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="subtle" bgColor={"red.600"} color="white">
                        <CircleX size={16} /> Release Ticket
                    </Button>
                    <Button>
                        Purschase now <MoveRight size={16} />
                    </Button>
                </Card.Footer>
            </Card.Root>
        </Box>
    );
}
