import React from "react";
import { Route, HashRouter } from 'react-router-dom';

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Opensource from "./pages/Opensource";

function Routes()
{
    return(
        <HashRouter>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/projects'>
                <Projects />
            </Route>
            <Route exact path='/contact'>
                <Contact />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/opensource'>
                <Opensource />
            </Route>
        </HashRouter>
    )
};

export default Routes;