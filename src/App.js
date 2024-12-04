import React from "react";
import "./App.css";
import ListingPage from "./components/ListingPage/ListingPage";
import { Toaster } from "react-hot-toast";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage/HomePage";
import GunturListPage from "./pages/ListingPage/GunturListPage";
import { Routes, Route } from "react-router-dom";
import SriSaravana from "./pages/SriSaravana";
import IndrravathiPage from "./pages/Indrravathi";
import LVRGardens from "./pages/LVRGardens";
import SriBhavya from "./pages/SriBhavya";
import IndravathiLayout from "./pages/IndravathiLayout/IndravathiLayout";
import InprogressPage from "./pages/InprogressPage/InprogressPage";

function App() {
    return (
        <div className="app-wrapper">
            <Routes>
                {/* <Route path="/" element={<Navigate to="/login" />} /> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/guntur-ventures" element={<ListingPage />} />
                <Route path="/sri-saravana" element={<SriSaravana />} />
                <Route path="/indrravathi" element={<IndrravathiPage />} />
                <Route path="/lvr-gardens" element={<LVRGardens />} />
                <Route path="/sri-bhavya" element={<SriBhavya />} />
                <Route path="/indrravathi-layout" element={<IndravathiLayout />} />
                <Route path="/guntur" element={<GunturListPage />} />
                <Route path="/inprogress" element={<InprogressPage />} />
                {/* <SignIn />  */}
            </Routes>
            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
}

export default App;
