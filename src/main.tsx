import "./index.css";
import routes from "@/routes/routes";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactChakraProvider } from "@/providers/ReactChakraProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ReactKindeProvider } from "./providers/ReactKindeProvider";

const router = createBrowserRouter(routes);

async function enableMocking() {
    if (import.meta.env.MODE !== "development") return;
    const { worker } = await import("@/mocks/browser");

    await worker.start();
}

// enableMocking().then(() => {
createRoot(document.getElementById("root")!).render(
    <ReactQueryProvider>
        <ReactChakraProvider>
            <ReactKindeProvider>
                <RouterProvider router={router} />
            </ReactKindeProvider>
        </ReactChakraProvider>
    </ReactQueryProvider>
);
// });
