import { useEffect, useState } from "react";

export const useDelay = () => {
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDelay(true);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, []);
    return { delay };
};
