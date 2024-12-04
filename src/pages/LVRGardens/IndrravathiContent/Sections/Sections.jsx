import React, { useState } from "react";
import "./sections.css";
import { indrravathiTabs } from "../../../../AppConfig";
import Ameneties from "./Ameneties/Ameneties";
import LocationHighlights from "./LocationHighlights/LocationHighlights";
import Map from "./Map/Map";
import DigitalLayout from "./DigitalLayout/DigitalLayout";
import Contact from "./Contact/Contact";
import Brochure from "./Brochure/Brochure";
// import { Element, Events, Link, scroller } from "react-scroll";

const Sections = () => {
    const [activeTab, setActiveTab] = useState(indrravathiTabs[0].id);
    // const offset = -100; // Adjust offset as needed

    const handleClickTab = (id) => {
        setActiveTab(id);
        // scrollToSection(id); // Ensure this is not commented
        setActiveTab(id);
        const targetElement = document.getElementById(id);
        // console.log(targetElement, "uuuuuu");
        // if (targetElement) {
        //     const topPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
        //     console.log(topPosition, "888888");
        //     window.scrollTo({
        //         top: topPosition,
        //         behavior: "smooth", // Adds smooth scrolling effect
        //     });
        // }
        if (targetElement) {
            // Use scrollIntoView for smooth scrolling
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start", // Aligns the top of the element with the top of the viewport
            });

            // // Apply offset by scrolling slightly more
            // window.scrollBy(0, -1000);
            // Apply the offset after a delay to account for smooth scrolling
            // setTimeout(() => {
            //     window.scrollBy({
            //         top: offset,
            //         behavior: "smooth",
            //     });
            // }, 300); // Delay to allow the initial scroll to complete
        }
    };

    // const scrollToSection = (id) => {
    //     console.log(id);
    //     scroller.scrollTo(id, {
    //         duration: 100, // Adjust duration for smoother scrolling
    //         delay: 0,
    //         smooth: "easeInOutQuart",
    //         offset: -90, // Adjust offset if necessary
    //     });
    // };

    return (
        <div className="indrravathi-sections">
            <div className="tabs">
                {indrravathiTabs.map((tab, index) => (
                    <span
                        className={`tab ${activeTab === tab.id ? "active" : ""}`}
                        key={index}
                        onClick={() => handleClickTab(tab.id)} // Pass the correct `tab.id`
                    >
                        {tab.label}
                    </span>
                ))}
            </div>
            <div className="content">
                <Ameneties />
                <LocationHighlights />
                <Map />
                <DigitalLayout />
                <Brochure />
                <Contact />
            </div>
        </div>
    );
};

export default Sections;
