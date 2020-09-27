import React from "react";
import {Link} from "react-router-dom";
import Layout from "../Layout";
import "./index.css";

// json
import {opensource} from "../../data/list.json";

function Opensource() {
    return (
        <Layout title="Opensource">
            <div class="row">
                {opensource.map((e, i) => {
                    return(
                        <div class="col-md-3 mini-card" key={i}>
                            <Link to={`/article/${e.source}/${e.title}`} >
                                    <div class="mini-card-thumb">
                                        <img src={e.icon} />
                                    </div>
                                    <div class="mini-card-title text-center mt-3">
                                        <h5 class="font-weight-bold"><span>{e.title}</span></h5>
                                    </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Layout>
    );
}

export default Opensource;