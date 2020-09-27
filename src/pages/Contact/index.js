import React, { useState, useEffect } from 'react';
import Layout from "../Layout";

// style
import "./index.css";

function Contact() {
    const [style, setStyle] = useState({
        display: "",
    });

    function sendWebHook(event) {
        event.preventDefault();

        const webhook = "https://discordapp.com/api/webhooks/759374758730399776/N4LW1yhaiNOQtYsqkt0JZoEKv-rkd8MCXUjxvMPd9TVMQJDOmO7YF6yaVoS_4HadG5eF";
        const form = event.target;
        const [nick, msg] = form.getElementsByTagName("input");

        if(!nick.value || !msg.value) {
            error();
            return;
        }

        function error() {
            form.parentNode.textContent = "❌ Some problem at the process";
        }

        function sucess() {
            form.parentNode.textContent = "✔️ Message sent successfully";
        }

        setStyle({
            display: "none",
        });

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
        })
        .then(() => sucess())
        .catch(() => error());
    }

    return (
        <Layout title="Contact Webhook">
            <div class="center-content">
                <form class="discord-webhook text-left" style={style} onSubmit={e => sendWebHook(e)}>
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