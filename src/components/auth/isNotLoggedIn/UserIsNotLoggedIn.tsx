import { Fragment } from "react";
import { Button, List } from "@chakra-ui/react";
import { UserNotLoggedInProps } from "@/types";

export const UserIsNotLoggedIn = ({ handleAuthLogin, handleAuthRegister, isAuthenticated }: UserNotLoggedInProps) => {
    return (
        <Fragment>
            {!isAuthenticated && (
                <List.Root gap="2" display="flex" flexDirection="row" listStyleType="none">
                    <List.Item>
                        <Button onClick={handleAuthRegister} variant="subtle" size="sm">
                            Register
                        </Button>
                    </List.Item>
                    <List.Item>
                        <Button onClick={handleAuthLogin} size="sm">
                            Sign In
                        </Button>
                    </List.Item>
                </List.Root>
            )}
        </Fragment>
    );
};
