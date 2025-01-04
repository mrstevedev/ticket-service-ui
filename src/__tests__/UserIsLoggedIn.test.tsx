import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReactChakraProvider } from "@/providers/ReactChakraProvider";
import { UserIsLoggedIn } from "@/components/auth/isLoggedIn/UserIsLoggedIn";
import { supressParseStylingError } from "@/utils";

supressParseStylingError();
vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: vi.fn(),
    Link: vi.fn()
}));

describe("A user is logged in", () => {
    beforeEach(async () =>
        render(
            <ReactChakraProvider>
                <UserIsLoggedIn user={undefined} isAuthenticated={true} />
            </ReactChakraProvider>
        )
    );

    afterEach(() => vi.clearAllMocks());

    it("renders Sell Tickets component", () => {
        expect(screen.getByText("Sell Tickets")).toBeInTheDocument();
    });

    it("renders My Tickets component", () => {
        expect(screen.getByText("My Tickets")).toBeInTheDocument();
    });

    it("renders Avatar component", () => {
        expect(screen.getByTestId("avatar")).toBeInTheDocument();
    });
});
