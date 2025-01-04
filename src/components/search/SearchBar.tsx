import { X, Search } from "lucide-react";
import { SearchBarProps } from "@/types";
import { Box, Input, Spinner } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";

export default function SearchBar({ query, isSearching, handleQueryResults, handleClearSearch }: SearchBarProps) {
    return (
        <Box
            className="search-bar"
            sm={{ margin: "0 1rem" }}
            md={{ margin: "0 1rem" }}
            lg={{ margin: "0 1rem" }}
            xl={{ margin: "0 0rem" }}
        >
            <form>
                <InputGroup
                    width="100%"
                    startElement={isSearching ? <Spinner size="sm" /> : <Search size={18} />}
                    endElement={
                        query && (
                            <X
                                size={18}
                                className="hover:text-gray-500 transition-all cursor-pointer"
                                onClick={handleClearSearch}
                            />
                        )
                    }
                >
                    <Input
                        width="100%"
                        type="search"
                        variant="subtle"
                        id="search-bar"
                        bg="gray.50"
                        _hover={{ bg: "gray.100" }}
                        placeholder="Search Events"
                        onChange={handleQueryResults}
                        transition={"background 0.1s ease-in-out"}
                    />
                </InputGroup>
            </form>
        </Box>
    );
}
