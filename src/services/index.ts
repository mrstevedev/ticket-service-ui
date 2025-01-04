import axios from "axios";
import { Event } from "@/types";
import { API_ENDPOINT, ROUTE } from "@/constants";

export const API = axios.create({
    baseURL: API_ENDPOINT.BASE_URL
});

export const handleGetEvents = async (limit: number) => {
    console.log("limit", limit);
    const { data } = await API.get<Event[]>(ROUTE.EVENTS, {
        params: {
            _limit: limit
        }
    });

    return data;
};

export const queryResults = async (query: string) => {
    const { data } = await API.get<Event[]>(ROUTE.EVENTS, {
        params: {
            q: query
        }
    });
    return data;
};
