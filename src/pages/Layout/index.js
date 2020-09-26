import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

// images
import brandName from "../../assets/brand-name.png";
import euFlag from "../../assets/EU-flag.png";
import brFlag from "../../assets/BR-flag.png";
import arrowDown from "../../assets/arrow-down.png";
import objectsLeft from "../../assets/objects-left.png";
import objectsRight from "../../assets/objects-right.png";

function Home({children}) {
return (
<div>
    <div class="navbar">
        <div class="navbar-inner align-items-center d-flex justify-content-between">
            <Link to="/">
                <div class="brand">
                    <img src={brandName} />
                </div>
            </Link>
            <div class="drop-down">
                <div class="d-flex justify-content-start align-items-center">
                    <div class="flag">
                        <img src={brFlag} />
                    </div>
                    <div class="flag-language ml-3"><span>Português</span></div>
                    <div class="icon ml-3"><img src={arrowDown}/></div>
                </div>
            </div>
        </div>
    </div>
    <div class="content-inner">
        {children}
    </div>
    <div class="ornament d-flex justify-content-between align-items-end">
        <div class="ornament-left">
            <img src={objectsLeft} />
        </div>
        <div class="ornament-right">
            <img src={objectsRight} />
        </div>
    </div>
</div>
);
}

export default Home;