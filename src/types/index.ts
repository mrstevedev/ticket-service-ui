import { ReactNode } from "react";

export type SearchBarProps = {
    query: string;
    openSearch: boolean;
    isSearching: boolean;
    handleQueryResults: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClearSearch: () => void;
    handleCloseSearch: () => void;
};

export type SearchDropdownProps = {
    query: string;
    noResults: boolean;
    openSearch: boolean;
    handleCloseSearch: () => void;
    queryResultsData: {
        id: number;
        title: string;
        description: string;
        date: string;
        location: string;
        tickets: string;
        price: number;
        image: string;
    }[];
};

export type Event = {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    tickets: string;
    price: number;
    image: string;
    reserved: {
        userId: number | null;
    };
};

export type EventDetailProps = {
    event: Event;
};

export type EventsProps = {
    events: Event[] | undefined;
    blur: string;
};

export type ReactQueryProviderProps = {
    children?: ReactNode;
};

export type KindeUser = {
    id: string | null;
    picture: string | null;
    given_name: string | null;
    family_name: string | null;
    email: string | null;
};

export type UserLoggedInProps = {
    user: KindeUser | undefined;
    handleNavigateToMyTickets?: () => void;
    handleNavigateToSellTickets?: () => void;
    handleAuthLogout?: () => void;
    isAuthenticated: boolean;
};

export type User = {
    id: string;
    picture: string;
    given_name: string;
    family_name: string;
    email: string;
};

export type UserNotLoggedInProps = {
    handleAuthLogin: () => void;
    handleAuthRegister: () => void;
    isAuthenticated: boolean;
};

export type EventTogglerProps = {
    limit: number;
    handleSetUpcomingEvents: (limit: number) => void;
};
