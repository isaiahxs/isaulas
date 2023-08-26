import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../GlenBurnie/GBHomePage/index.js';

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    )
}