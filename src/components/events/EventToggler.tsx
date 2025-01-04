import { Calendar } from "lucide-react";
import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { EventTogglerProps } from "@/types";

export default function EventToggler({ limit, handleSetUpcomingEvents }: EventTogglerProps) {
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="subtle" fontWeight="bold">
                    <Calendar size={14} /> {limit} Upcoming Events
                </Button>
            </MenuTrigger>
            <MenuContent width={202}>
                <MenuItem value="25" _hover={{ bg: "gray.100" }} onClick={() => handleSetUpcomingEvents(12)}>
                    12 Upcoming Events
                </MenuItem>
                <MenuItem value="25" _hover={{ bg: "gray.100" }} onClick={() => handleSetUpcomingEvents(25)}>
                    25 Upcoming Events
                </MenuItem>
                <MenuItem value="50" _hover={{ bg: "gray.100" }} onClick={() => handleSetUpcomingEvents(50)}>
                    50 Upcoming Events
                </MenuItem>
                <MenuItem value="100" _hover={{ bg: "gray.100" }} onClick={() => handleSetUpcomingEvents(100)}>
                    100 Upcoming Events
                </MenuItem>
            </MenuContent>
        </MenuRoot>
    );
}
