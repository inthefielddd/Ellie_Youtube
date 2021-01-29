import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/videoList";

function App() {
    //videos의목록
    const [videos, setVideos] = useState([]);

    //[]배열안에 값을 넣으면 그 값이 바뀔떄마다 mount가 된다
    //[] 비어있을때는 호출될때마다
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCSO9IkhCXuH03IAM-e3Vzup2vgyJD76Ls",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));
    }, []);

    return <VideoList videos={videos} />;
}
export default App;
