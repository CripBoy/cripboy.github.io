import React from "react";
import Layout from "../Layout";
import "./index.css";

// images
import discord from "../../assets/icon-discord.png";
import github from "../../assets/icon-github.png";
import twitter from "../../assets/icon-twitter.png";

function About() {
    return (
        <Layout title="About me">
            <div class="row">
                <div class="col-md-3 text-center">
                    <div class="me-thumb"></div>
                    <div class="me-name m-2"><h5 class="font-weight-bold"><span>Pedro de Lucas</span></h5></div>
                    <div class="row social-medias">
                        <div class="col-md-4 social-icon">
                            <img src={twitter} />
                        </div>
                        <div class="col-md-4 social-icon">
                            <img src={discord} />
                        </div>
                        <div class="col-md-4 social-icon">
                            <img src={github} />
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <h5 class="mb-5">
                        <span>
                            <b>👋 Hello there!</b><br/>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </span>
                    </h5>
                    <h5 class="mb-5">
                        <span>
                            <b>👨‍🎓 Formations</b><br/>
                            * IFRN, TI for web (complete)<br/>
                            * UFRN, Graduation of Information Technology (studying)<br/>
                            * UFRN, Computer Science (studying)<br/>
                        </span>
                    </h5>
                </div>
            </div>
        </Layout>
    );
}

export default About;