import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export function ReactChakraProvider({ children }: { children: React.ReactNode }) {
    return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
