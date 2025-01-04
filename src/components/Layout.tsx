import { Outlet } from "react-router-dom";
import Header from "@/components/header/header";
import { Container } from "@chakra-ui/react";
import Footer from "./footer/Footer";

export default function Layout() {
    return (
        <>
            <Header />
            <Container
                smDown={{ margin: "2rem auto" }}
                sm={{ padding: "2rem 1rem" }}
                md={{ padding: "2rem 1rem" }}
                xl={{ padding: "2rem 0" }}
            >
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}
