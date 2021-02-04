import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import YouTube from "./service/youtube";
import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new YouTube(httpClient);

ReactDOM.render(
    <React.StrictMode>
        <App youtube={youtube} />
    </React.StrictMode>,
    document.getElementById("root")
);
