import { client } from "@/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryProviderProps } from "@/types";

export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
