import React from "react";
import HeroSection from "./HeroSection";
import Header from "../../../components/Header/Header";
import VenturesList from "./VenturesList";
import Footer from "../../../components/Footer";

const GunturListPage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <VenturesList />
            <Footer />
        </>
    );
};

export default GunturListPage;
