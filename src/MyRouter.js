import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Map from "./Map"
import Actions from "./Actions"
import Variable from "./Variable"
import Portfolio from "./Portfolio"
import Header from './Header';
import { Box } from '@material-ui/core';

const MyRouter = () => {
    return (
        <div className='containter-fluid'>
            <Box sx={{m:10}}>
            <Router>
                <Box>
                    <Header />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <Routes>
                        <Route path="/actions" element={<Actions />} />
                        <Route path="/map" element={<Map />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/variable" element={<Variable />} />
                        <Route path="/" element={<Actions />} />
                    </Routes>
                </Box>

            </Router>
            </Box>
        </div>
    )
}

export default MyRouter;
