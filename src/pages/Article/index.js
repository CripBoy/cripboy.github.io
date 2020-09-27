import React, { useState, useEffect } from 'react';
import marked from "marked";
import Layout from "../Layout";
import {useParams} from "react-router-dom";

// style
import "./index.css";

function Article() {
    const { type, source, title } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/articles/${type}/${source}.md`)
        .then(resp => resp.text()
        .then(mdContent => {
            document.getElementById("article").innerHTML = marked(mdContent)
        }));
    });

    return (
        <Layout title={title}>
            <div id="article"></div>
        </Layout>
    );
}

export default Article;