/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from "./videoDetail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => {
    return (
        <section className={styles.detail}>
            <iframe
                className={styles.video}
                type="text/html"
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameborder="0"
                allowfullscreen
            ></iframe>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre>{snippet.description}</pre>
        </section>
    );
};

export default VideoDetail;
