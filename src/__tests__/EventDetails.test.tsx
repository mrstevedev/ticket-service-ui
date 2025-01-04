import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReactChakraProvider } from "@/providers/ReactChakraProvider";
import EventDetails from "@/components/events/EventDetails";
import { supressParseStylingError } from "@/utils";
import { event } from "@/__tests__/event";

vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: vi.fn(),
    Link: vi.fn()
}));

supressParseStylingError();
describe("EventDetails", () => {
    beforeEach(async () =>
        render(
            <ReactChakraProvider>
                <EventDetails event={event} blur="none" />
            </ReactChakraProvider>
        )
    );

    afterEach(() => vi.clearAllMocks());

    it("renders component", () => {
        expect(screen.getByTestId("event-details")).toBeInTheDocument();
    });

    it("renders title", () => {
        expect(screen.getByText("Test Event")).toBeInTheDocument();
    });

    it("renders description", () => {
        expect(screen.getByText("This is a test event")).toBeInTheDocument();
    });

    it("renders date", () => {
        expect(screen.getByText("Jan 01, 2022")).toBeInTheDocument();
    });

    it("renders location", () => {
        expect(screen.getByText("Test Location")).toBeInTheDocument();
    });

    it("renders price", () => {
        expect(screen.queryByText("$100")).toBeInTheDocument();
    });
});
