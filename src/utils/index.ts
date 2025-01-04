import { Event } from "@/types";

export const debounce = (callback: () => Promise<Event[] | undefined>, delay: number) => {
    let timer: NodeJS.Timeout;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback();
        }, delay);
    };
};

export const supressParseStylingError = () => {
    const originalConsoleError = console.error;
    const jsDomCssError = "Error: Could not parse CSS stylesheet";
    console.error = (...params) => {
        if (!params.find((p) => p.toString().includes(jsDomCssError))) {
            originalConsoleError(...params);
        }
    };
};
