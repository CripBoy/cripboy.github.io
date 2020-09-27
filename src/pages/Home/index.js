import React from "react";
import {Link} from "react-router-dom";
import Layout from "../Layout";

// style
import "./index.css";

// images
import iconSocks from "../../assets/icon-socks.png";
import iconBottle from "../../assets/icon-bottle.png";
import iconShirt from "../../assets/icon-shirt.png";
import arrowCurved from "../../assets/arrow-curved.png";

function Home() {
    return (
        <Layout>
            <div class="menu-cards">
                <div class="row">
                        <div class="col-md-4 card-item text-center">
                            <Link to="/projects">
                                <div class="card-name"><h4 class="font-weight-bold"><span>Projects</span></h4></div>
                                <div class="card-icon mt-4">
                                    <img style={{width: "130px"}} class="centered" src={iconSocks} />
                                </div>
                            </Link>
                        </div>
                    <div class="col-md-4 card-item text-center">
                        <Link to="/opensource">
                            <div class="card-name"><h4 class="font-weight-bold"><span>Opensource</span></h4></div>
                            <div class="card-icon mt-4">
                                <img style={{width: "130px"}} class="centered" src={iconBottle} />
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-4 card-item text-center">
                        <Link to="/about">
                            <div class="card-name"><h4 class="font-weight-bold"><span>About me</span></h4></div>
                            <div class="card-icon mt-4">
                                <img style={{width: "160px"}} class="centered" src={iconShirt} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div class="call-to-action">
                    <div class="icon-arrow-curved">
                        <img src={arrowCurved} />
                    </div>
                    <Link to="/contact"><h4><span>Contact me</span></h4></Link>
                </div>
            </div> 
        </Layout>
    );
}

export default Home;