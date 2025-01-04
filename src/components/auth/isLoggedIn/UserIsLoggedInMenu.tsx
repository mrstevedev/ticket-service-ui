import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { MenuContent, MenuItem } from "@/components/ui/menu";
import { Box, Avatar, Circle, Float, Heading, Text } from "@chakra-ui/react";
import { MenuRoot, MenuTrigger } from "@/components/ui/menu";

export default function UserIsLoggedInMenu({ user, handleAuthLogout }: any) {
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Box>
                    <Avatar.Root data-testid="avatar" colorPalette="green" variant="subtle" width={"36px"} height={"36px"}>
                        <Avatar.Image src="/images/orgy-img-1.jpg" />
                        <Float placement="bottom-end" offsetX="1" offsetY="1">
                            <Circle bg="green.500" size="8px" outline="0.2em solid" outlineColor="bg" />
                        </Float>
                    </Avatar.Root>
                </Box>
            </MenuTrigger>

            <MenuContent data-testid="menu" width={450} height={300} borderRadius="lg" shadow="xs" bg="gray.50">
                <Box bg="white" borderRadius="lg">
                    <Box padding="1rem 1rem 1rem 1rem" display="flex" gap="3" alignItems="center">
                        <Avatar.Root colorPalette="green" variant="subtle" width={"45px"} height={"45px"}>
                            <Avatar.Image src="/images/orgy-img-1.jpg" />
                            <Float placement="bottom-end" offsetX="1" offsetY="1">
                                <Circle bg="green.500" size="8px" outline="0.2em solid" outlineColor="bg" />
                            </Float>
                        </Avatar.Root>
                        <Box margin="0.5rem 0 0.5rem 0">
                            <Heading as="h3" size="md" data-testid="user-name">
                                {user?.given_name} {user?.family_name}
                            </Heading>
                            <Text as="p" color="gray.500" data-testid="user-email">
                                {user?.email}
                            </Text>
                        </Box>
                    </Box>

                    <Link to="/account" style={{ outline: "none" }}>
                        <MenuItem value="account" valueText="account" padding="1rem" _hover={{ bg: "gray.100" }}>
                            <User size={14} />
                            My Account
                        </MenuItem>
                    </Link>
                    <MenuItem
                        value="logout"
                        valueText="logout"
                        padding="1rem"
                        data-testid="logout"
                        _hover={{ bg: "gray.100" }}
                        onClick={handleAuthLogout}
                    >
                        <LogOut size={14} onClick={handleAuthLogout} />
                        Log Out
                    </MenuItem>
                    <Box bg="gray.50" height="100%" padding="1rem">
                        <Text as="p" margin="1rem 1rem 1rem 1rem" fontSize="sm" display="flex" justifyContent="center" gap="2">
                            Secured by{" "}
                            <svg
                                width="50"
                                height="21"
                                aria-hidden="true"
                                className="hidden dark:flex"
                                data-icon="kinde-logo-dark"
                            >
                                {" "}
                                <symbol id="ai:local:kinde-logo-dark" viewBox="0 0 406.43 136.437">
                                    <path
                                        fill="currentColor"
                                        d="M94.796 134.326H72.344l-54.69-66.012v66.012H0V0h17.654v64.093L70.425 0h21.108L37.035 65.437l57.76 68.89Zm2.495-121.47c0-6.141 4.605-10.361 10.362-10.361 5.949 0 10.554 4.221 10.554 10.361 0 5.949-4.605 10.555-10.554 10.555-5.757 0-10.362-4.605-10.362-10.555m2.111 121.47V37.804h16.503v96.522zm27.44 0V37.804h12.281l3.646 12.089h.959c3.646-5.565 13.433-14.2 27.633-14.2 22.26 0 38.763 16.695 38.763 42.408v56.226h-16.695V78.678c0-16.887-10.362-27.441-24.562-27.441-14.968 0-25.522 10.555-25.522 27.441v55.649h-16.503Zm90.381-48.357c0-29.552 20.341-50.276 44.52-50.276 15.352 0 26.481 9.979 29.168 13.816h.959V0h16.503v134.326h-12.281l-3.646-12.089h-.959c-2.878 3.838-14.008 14.199-29.744 14.199-24.179 0-44.52-20.916-44.52-50.468Zm74.647 0c0-20.725-13.433-34.733-29.168-34.733-15.543 0-28.976 14.009-28.976 34.733 0 20.917 13.433 34.925 28.976 34.925 15.735 0 29.168-14.008 29.168-34.925m113.792 7.292h-73.304c2.495 17.463 14.008 28.017 29.936 28.017 11.514 0 18.998-5.181 23.795-12.856h17.079c-5.757 14.584-21.108 28.016-41.065 28.016-26.098 0-46.63-21.107-46.63-50.468 0-28.593 21.108-50.276 46.438-50.276s44.52 20.916 44.52 47.974c0 4.03-.192 7.292-.768 9.595Zm-73.495-13.625h58.144c-1.919-16.887-13.241-28.783-28.4-28.783-14.584 0-27.249 11.321-29.744 28.783"
                                    ></path>
                                </symbol>
                                <use href="#ai:local:kinde-logo-dark"></use>{" "}
                            </svg>
                        </Text>
                    </Box>
                </Box>
            </MenuContent>
        </MenuRoot>
    );
}
