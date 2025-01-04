import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReactChakraProvider } from "@/providers/ReactChakraProvider";
import UserIsLoggedInMenu from "@/components/auth/isLoggedIn/UserIsLoggedInMenu";
import { supressParseStylingError } from "@/utils";

supressParseStylingError();

vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: vi.fn(),
    Link: vi.fn()
}));

describe("A user is logged in and the menu is rendered", () => {
    beforeEach(async () =>
        render(
            <ReactChakraProvider>
                <UserIsLoggedInMenu user={undefined} isAuthenticated={true} />
            </ReactChakraProvider>
        )
    );

    afterEach(() => vi.clearAllMocks());

    describe("UserIsLoggedInMenu", () => {
        it("renders UserIsLoggedInMenu", () => {
            expect(screen.getByTestId("menu")).toBeInTheDocument();
        });

        it("renders avatar", () => {
            expect(screen.getByTestId("avatar")).toBeInTheDocument();
        });

        it("renders logout button", () => {
            expect(screen.getByTestId("logout")).toBeInTheDocument();
        });

        it("renders user name", () => {
            expect(screen.getByTestId("user-name")).toBeInTheDocument();
        });

        it("renders user email", () => {
            expect(screen.getByTestId("user-email")).toBeInTheDocument();
        });
    });
});
