import React from "react";
import "./App.css";
import FocusWithinMenuDemo from "./components/FocusWithinMenuDemo";
import TrackingMenuDemo from "./components/TrackingMenuDemo";

function App() {
    return <div className="App h-screen bg-gray-200">
        <FocusWithinMenuDemo></FocusWithinMenuDemo>
        <TrackingMenuDemo></TrackingMenuDemo>
    </div>;
}

export default App;
