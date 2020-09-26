import React from "react";
import Layout from "../Layout";

// style
import "./index.css";

function Contact() {
    function sendWebHook(event) {
        event.preventDefault();

        const webhook = "https://discordapp.com/api/webhooks/759374758730399776/N4LW1yhaiNOQtYsqkt0JZoEKv-rkd8MCXUjxvMPd9TVMQJDOmO7YF6yaVoS_4HadG5eF";
        const form = event.target;
        const [nick, msg] = form.getElementsByTagName("input");

        if(!nick.value && !msg.value)
            return;

        fetch(webhook, {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              "embeds": [
                {
                  "title": nick.value,
                  "description": msg.value,
                  "color": 7506394,
                  "timestamp": new Date()
                }
              ]
            })
        });
    }

    return (
        <Layout>
            <div class="center-content align-items-center d-flex">
                <form class="discord-webhook text-left" onSubmit={e => sendWebHook(e)}>
                    <div class="title mt-3 mb-3">
                        <h3 class="font-weight-bold"><span>Contact me</span></h3>
                    </div>
                    <div class="form-item mt-3 mb-3">
                        <div class="form-label mt-3 mb-3"><h5><span>Identify</span></h5></div>
                        <input placeholder="Some fun name for this webhook" type="text" name="pseudo" />
                    </div>
                    <div class="form-item mt-3 mb-3">
                        <div class="form-label mt-3 mb-3"><h5><span>Message Content</span></h5></div>
                        <input class="textarea" placeholder="Hello, type here wath you wanna say" type="text" name="msg" />
                    </div>
                    <button><span>Send to me</span></button>
                </form>
            </div>
        </Layout>
    );
}

export default Contact;