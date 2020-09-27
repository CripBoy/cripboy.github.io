import React from "react";
import Layout from "../Layout";
import "./index.css";

function Projects() {
    return (
        <Layout title="Opensource">
            <div class="row">
                <div class="col-md-3 mini-card">
                    <div class="mini-card-thumb">
                        <img src="https://discordapp.com/assets/1cbd08c76f8af6dddce02c5138971129.png" />
                    </div>
                    <div class="mini-card-title text-center mt-3">
                        <h5 class="font-weight-bold"><span>Discord bot</span></h5>
                    </div>
                </div>

                <div class="col-md-3 mini-card">
                    <div class="mini-card-thumb">
                        <img src="https://bots.ondiscord.xyz/favicon/android-chrome-256x256.png" />
                    </div>
                    <div class="mini-card-title text-center mt-3">
                        <h5 class="font-weight-bold"><span>Discord bot</span></h5>
                    </div>
                </div>

                <div class="col-md-3 mini-card">
                    <div class="mini-card-thumb">
                        <img src="https://discordbotlist.com/icon.png" />
                    </div>
                    <div class="mini-card-title text-center mt-3">
                        <h5 class="font-weight-bold"><span>Discord bot</span></h5>
                    </div>
                </div>

                <div class="col-md-3 mini-card">
                    <div class="mini-card-thumb">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdxLpixYC_mvcLxrlq67PxcfHRAwIdoFyoSQ&usqp=CAU" />
                    </div>
                    <div class="mini-card-title text-center mt-3">
                        <h5 class="font-weight-bold"><span>Discord bot</span></h5>
                    </div>
                </div>

                <div class="col-md-3 mini-card">
                    <div class="mini-card-thumb">
                        <img src="https://images.discordapp.net/avatars/565119394837954569/f145a84f608c1fb48180bb81a66cf048.png?size=512" />
                    </div>
                    <div class="mini-card-title text-center mt-3">
                        <h5 class="font-weight-bold"><span>Discord bot</span></h5>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Projects;