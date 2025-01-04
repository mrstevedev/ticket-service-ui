import { Box, Heading } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Sell() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <Box>
            <Heading as="h1" size="xl" margin="1rem 0">
                Sell Tickets
            </Heading>

            <IconButton bg="none" _hover={{ bg: "gray.100" }} rounded="full" onClick={handleGoBack}>
                <ArrowLeft color="black" />
            </IconButton>
        </Box>
    );
}
