import { KindeProvider } from "@kinde-oss/kinde-auth-react";

export function ReactKindeProvider({ children }: { children: React.ReactNode }) {
    return (
        <KindeProvider
            clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
            domain={import.meta.env.VITE_KINDE_DOMAIN}
            redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URI}
            logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URI}
        >
            {children}
        </KindeProvider>
    );
}
