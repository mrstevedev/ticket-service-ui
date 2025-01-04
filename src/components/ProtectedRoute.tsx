import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useKindeAuth();

    if (isLoading) return <div>Loading...</div>;

    if (!isAuthenticated) navigate("/");

    if (!isLoading && isAuthenticated) return <Outlet />;
}
