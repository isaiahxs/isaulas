import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import GBHomePage from '../GlenBurnie/GBHomePage/index.js';
import ANHomePage from '../Annapolis/ANHomePage/index.js';

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<GBHomePage />} />
                <Route path="/annapolis" element={<ANHomePage />} />
            </Routes>
        </main>
    )
}
