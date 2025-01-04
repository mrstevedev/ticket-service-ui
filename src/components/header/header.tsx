import { Box, Heading, Container } from "@chakra-ui/react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "@/components/search/SearchBar";
import Dropdown from "@/components/search/Dropdown";
import { queryResults } from "@/services";
import { debounce } from "@/utils";
import { Event } from "@/types";
import { UserIsLoggedIn } from "@/components/auth/isLoggedIn/UserIsLoggedIn";
import { UserIsNotLoggedIn } from "@/components/auth/isNotLoggedIn/UserIsNotLoggedIn";

export default function Header() {
    const { login, register, logout, isAuthenticated, user } = useKindeAuth();
    const navigate = useNavigate();

    const [openSearch, setOpenSearch] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [query, setQuery] = useState("");
    const [queryResultsData, setQueryResultsData] = useState<Event[]>([]);
    const [noResults, setNoResults] = useState(false);

    const handleAuthLogin = () => login();
    const handleAuthLogout = () => logout();
    const handleAuthRegister = () => register();
    const handleNavigateToMyTickets = () => navigate("/my-tickets");
    const handleNavigateToSellTickets = () => navigate("/sell-tickets");

    const handleCloseSearch = () => {
        setQuery("");
        setOpenSearch(false);
        setIsSearching(false);
        setQueryResultsData([]);
        const input = document.getElementById("search-bar") as HTMLInputElement;
        input.value = "";
    };

    const handleClearSearch = () => {
        setQuery("");
        setOpenSearch(false);
        setIsSearching(false);
        setQueryResultsData([]);
        const input = document.getElementById("search-bar") as HTMLInputElement;
        input.value = "";
    };

    const handleQueryResults = debounce(async () => {
        const input = document.getElementById("search-bar") as HTMLInputElement;
        const value = input.value;

        if (value.length <= 2) {
            setQuery("");
            setOpenSearch(false);
            setIsSearching(false);
            setQueryResultsData([]);
            return;
        }

        setQuery(value);
        setNoResults(false);
        setIsSearching(true);
        setOpenSearch(true);
        try {
            const response = await queryResults(value);

            if (response?.length === 0) {
                setTimeout(() => {
                    setNoResults(true);
                    setIsSearching(false);
                    setQueryResultsData([]);
                }, 500);
            } else if (response.length != 0) {
                setTimeout(() => {
                    setNoResults(false);
                    setIsSearching(false);
                    setQueryResultsData(response);
                }, 500);
            }
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        } finally {
            setTimeout(() => {
                setIsSearching(false);
            }, 500);
        }
    }, 300);

    return (
        <Box
            top="0"
            as="header"
            zIndex={2}
            padding="4"
            width="100%"
            display="flex"
            bgColor="white"
            position="fixed"
            alignItems="center"
            justifyContent="space-between"
        >
            <Link to="/">
                <Heading as="h1" size="sm" textTransform="uppercase">
                    Eventify
                </Heading>
            </Link>
            <Container className="search-bar" margin="0 13.81rem" position="relative" padding="0">
                <SearchBar
                    query={query}
                    openSearch={openSearch}
                    isSearching={isSearching}
                    handleQueryResults={handleQueryResults}
                    handleClearSearch={handleClearSearch}
                    handleCloseSearch={handleCloseSearch}
                />
                <Dropdown
                    query={query}
                    noResults={noResults}
                    queryResultsData={queryResultsData}
                    openSearch={openSearch}
                    handleCloseSearch={handleCloseSearch}
                />
            </Container>
            <UserIsLoggedIn
                user={user}
                isAuthenticated={isAuthenticated}
                handleNavigateToSellTickets={handleNavigateToSellTickets}
                handleNavigateToMyTickets={handleNavigateToMyTickets}
                handleAuthLogout={handleAuthLogout}
            />
            <UserIsNotLoggedIn
                isAuthenticated={isAuthenticated}
                handleAuthLogin={handleAuthLogin}
                handleAuthRegister={handleAuthRegister}
            />
        </Box>
    );
}
