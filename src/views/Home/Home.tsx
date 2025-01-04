import { EVENT } from "@/constants";
import { ArrowUp } from "lucide-react";
import { useDelay } from "@/hooks/useDelay";
import { useEffect, useState } from "react";
import { handleGetEvents } from "@/services";
// import { useObserver } from "@/hooks/useObserver";
import { useInfiniteQuery } from "@tanstack/react-query";
import Events from "@/components/events/EventsList";
import EventHeading from "@/components/events/EventHeading";
import EventToggler from "@/components/events/EventToggler";
import { Button, SimpleGrid, Box, Text } from "@chakra-ui/react";

export default function Home() {
    const { delay } = useDelay();
    const [blur, setBlur] = useState("blur(4px)");
    const [limit, setLimit] = useState(EVENT.LIMIT);
    const [updateLimit, setUpdateLimit] = useState(false);

    const { data, isError, fetchNextPage } = useInfiniteQuery({
        enabled: delay,
        queryKey: ["events"],
        initialPageParam: EVENT.LIMIT,
        queryFn: ({ pageParam }) => handleGetEvents(pageParam),
        getNextPageParam: (_lastPage, _allPages, page) => {
            if (updateLimit) return limit;

            return page + EVENT.NEXT_PAGE_LIMIT;
        }
    });

    // const { isIntersecting, observerRef } = useObserver(data);

    setTimeout(() => setBlur("none"), 1000);

    const handleSetUpcomingEvents = (limit: number) => {
        setLimit(limit);
        setUpdateLimit(true);
    };

    useEffect(() => {
        if (updateLimit) {
            fetchNextPage();
            setUpdateLimit(false);
        }
    }, [updateLimit, fetchNextPage, limit]);

    if (isError)
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height={"85vh"}>
                Something went wrong
            </Box>
        );

    return (
        <Box display="flex" flexDirection="column" padding="2rem 0 10rem 0">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <EventHeading />
                <EventToggler limit={limit} handleSetUpcomingEvents={handleSetUpcomingEvents} />
            </Box>
            <SimpleGrid columns={[1, 2, 3, 4]} gap="5">
                <Events blur={blur} events={data?.pages.at(-1)} />
            </SimpleGrid>

            {data?.pages.at(-1)?.length === data?.pages.at(-2)?.length ? (
                <Box display="flex" justifyContent="center">
                    <Text as="p" margin="2rem 0 1rem 0" textTransform="uppercase" fontSize="xs">
                        No more events
                    </Text>
                </Box>
            ) : null}

            {data?.pages.at(-1)?.length !== data?.pages.at(-2)?.length ? (
                <Button margin="3rem auto" variant="subtle" width="150px" onClick={() => fetchNextPage()}>
                    Load More
                </Button>
            ) : null}

            <Box display="flex" justifyContent="center" alignItems="center" textTransform="uppercase" fontSize="xs">
                <ArrowUp size={14} /> <a href="#top">Back to top</a>
            </Box>
        </Box>
    );
}
