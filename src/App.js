import React from "react";
import "./App.css";
import ListingPage from "./components/ListingPage/ListingPage";
import toast, { Toaster } from "react-hot-toast";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage/HomePage";
import GunturListPage from "./pages/ListingPage/GunturListPage";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import SriSaravana from "./pages/SriSaravana";
import IndrravathiPage from "./pages/Indrravathi";

function App() {
    return (
        <div className="app-wrapper">
            <Routes>
            {/* <Route path="/" element={<Navigate to="/login" />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/guntur-ventures" element={<ListingPage />} />
            <Route path="/sri-saravana" element={<SriSaravana />} />
            <Route path="/indrravathi" element={<IndrravathiPage />} />
            {/* <Route path="/" element={<ListingPage />} /> */}
            {/* <GunturListPage /> */}
            {/* <SignIn />  */}
            </Routes>
            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
}

export default App;
