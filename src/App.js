import React, { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/seachHeader";
import VideoList from "./components/video_list/videoList";
import styles from "./App.module.css";

function App({ youtube }) {
    //videos의목록
    const [videos, setVideos] = useState([]);

    //[]배열안에 값을 넣으면 그 값이 바뀔떄마다 mount가 된다
    //[] 비어있을때는 호출될때마다
    //네트워크 통신로직
    //search api
    const search = (query) => {
        youtube
            .search(query) //
            .then((videos) => setVideos(videos));
    };
    //videos를 가지고올 api
    useEffect(() => {
        youtube
            .mostPopular() //
            .then((videos) => setVideos(videos));
    });

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search} />
            <VideoList videos={videos} />
        </div>
    );
}
export default App;
