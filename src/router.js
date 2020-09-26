import React from "react";
import { Route, HashRouter } from 'react-router-dom';

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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
        </HashRouter>
    )
};

export default Routes;