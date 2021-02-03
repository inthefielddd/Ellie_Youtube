import React, { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/seachHeader";
import VideoList from "./components/video_list/videoList";
import styles from "./App.module.css";
import VideoDetail from "./components/video_detail/videoDetail";

function App({ youtube }) {
    //videos의목록
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSeletedVideo] = useState(null);

    //선택된 영상
    //video가 받아지면 setSeletedVideo를 이용해 state를 업데이트 시켜준다
    const selectVideo = (video) => {
        setSeletedVideo(video);
    };

    //[]배열안에 값을 넣으면 그 값이 바뀔때마다 mount가 된다
    //[] 비어있을때는 호출될때마다

    //네트워크 통신로직
    //search api
    const search = (query) => {
        setSeletedVideo(null);
        youtube
            .search(query) //
            .then((videos) => {
                setVideos(videos);
            });
    };

    //videos를 가지고올 api
    useEffect(() => {
        youtube
            .mostPopular() //
            .then((videos) => setVideos(videos));
    }, []);

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search} />
            <section className={styles.content}>
                {selectedVideo && (
                    <div className={styles.detail}>
                        <VideoDetail video={selectedVideo} />
                    </div>
                )}
                <div className={styles.list}>
                    <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? "list" : "grid"} />
                </div>
            </section>
        </div>
    );
}

export default App;
