import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/:id" element={<Detail />}></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;