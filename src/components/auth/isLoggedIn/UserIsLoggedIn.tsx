import { Fragment } from "react";
import { UserLoggedInProps } from "@/types";

import { Box, Button, List } from "@chakra-ui/react";
import UserIsLoggedInMenu from "@/components/auth/isLoggedIn/UserIsLoggedInMenu";

export const UserIsLoggedIn = ({
    user,
    handleNavigateToMyTickets,
    handleNavigateToSellTickets,
    handleAuthLogout,
    isAuthenticated
}: UserLoggedInProps) => {
    return (
        <Fragment>
            {isAuthenticated ? (
                <Box display="flex" gap="4" alignItems="center">
                    <List.Root gap="2" display="flex" flexDirection="row" listStyleType="none">
                        <List.Item>
                            <Button size="sm" variant="subtle" fontWeight="bold" onClick={handleNavigateToSellTickets}>
                                Sell Tickets
                            </Button>
                        </List.Item>
                        <List.Item>
                            <Button fontWeight="bold" size="sm" onClick={handleNavigateToMyTickets}>
                                My Tickets
                            </Button>
                        </List.Item>

                        <UserIsLoggedInMenu user={user} handleAuthLogout={handleAuthLogout} />
                    </List.Root>
                </Box>
            ) : null}
        </Fragment>
    );
};
