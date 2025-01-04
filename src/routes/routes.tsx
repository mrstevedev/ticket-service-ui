import App from "@/App";
import Home from "@/views/Home/Home";
import Tickets from "@/views/Tickets/Tickets";
import { RouteObject } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import NotFound from "@/views/Error/NotFound";
import EventDetails from "@/views/Event/EventDetails";
import Sell from "@/views/Sell/Sell";
import Account from "@/views/Account/Account";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/event/:title", element: <EventDetails /> },
            { path: "*", element: <NotFound /> },
            {
                path: "/my-tickets",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "/my-tickets",
                        element: <Tickets />
                    }
                ]
            },
            {
                path: "/sell-tickets",
                element: <Sell />
            },
            {
                path: "/account",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "/account",
                        element: <Account />
                    }
                ]
            }
        ]
    }
];
export default routes;
