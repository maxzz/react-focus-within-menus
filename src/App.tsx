import React from "react";
import "./App.css";
import TrackingMenuDemo from "./components/TrackingMenuDemo";
import FocusWithinMenuDemo from "./components/FocusWithinMenuDemo";
import ClickOutsideDemo from './components/ClickOutsideDemo';
import FramerMotionDemo from './components/FramerMotionDemo';

function App() {
    return <div className="App h-screen bg-gray-200">
        <FocusWithinMenuDemo></FocusWithinMenuDemo>
        <TrackingMenuDemo></TrackingMenuDemo>
        <ClickOutsideDemo></ClickOutsideDemo>
        <FramerMotionDemo></FramerMotionDemo>
    </div>;
}

export default App;
