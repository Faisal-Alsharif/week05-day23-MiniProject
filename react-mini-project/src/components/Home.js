import { useEffect } from "react";
// to modify we import use dispatch
// to read we import useSelector
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import VideosList from "./VideosList";
import { useHistory } from "react-router-dom";
import {setVideos, showVideoDetails} from "../reducer/videos/actions"


function Home() {

    const dispatch = useDispatch();
    const history = useHistory();


    const state = useSelector ((state) => {
        return {
    videos: state.videosReducer.videos,
        }
    })


useEffect(() => {
    // another key
    // AIzaSyAVmgV_0hw6BdKZQE1HGIjqtpuHu6f53dw
    axios
    .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyAC3GpTGqxiFFXvuepq40ibfhLHmNeKyFo")
    
    .then((response) => {
        const action = setVideos(response.data.items)
        // setVideosArray(response.data.items)
        dispatch(action)})
    .catch((err) => {
    console.log(err);
    });
    }, []);

  return (

    <>
{state.videos.map((element) => {
    console.log(element.id.videoId)
        return(
            <div className="card"onClick={() => {
                const action = showVideoDetails(element)
                dispatch(action)
                history.push("/VideoDetails")}}>

                <VideosList image={element.snippet.thumbnails.high.url} title={element.snippet.title} key={element.id.videoId} id={element.id.videoId}/>
            </div>
              )
          })}
    </>
  );
}

export default Home;
