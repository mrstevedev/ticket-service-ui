import { useState, useEffect, useRef } from "react";

export const useObserver = (data: unknown) => {
    const observerRef = useRef<HTMLDivElement | null>(null);

    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry);
                setIsIntersecting(entry.isIntersecting);
            },
            { root: null, threshold: 1, rootMargin: "0px" }
        );
        const ref = observerRef.current;
        if (ref) {
            observer.observe(ref);
            return () => {
                if (ref) observer.unobserve(ref);
            };
        }
    }, [data]);

    return { observerRef, isIntersecting };
};
