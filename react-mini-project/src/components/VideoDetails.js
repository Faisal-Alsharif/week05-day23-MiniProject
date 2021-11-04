import { useDispatch, useSelector } from "react-redux";
import { addToWatchLater } from "../reducer/videos/actions";
import { useHistory } from "react-router";


function VideoDetails({snippet,title,publishedAT,chanenelTitle,description}) {

  const dispatch = useDispatch();
  const history = useHistory();

  const state = useSelector ((state) => {
    // console.log(state)
    return {
videoDetails: state.videosReducer.videoDetails,
    }
})

    let url = "https://www.youtube.com/embed/" + state.videoDetails.id.videoId;

    return (
      <>
      <div className="card-container">
        <div className="card">
          {console.log(state.videoDetails.snippet.title)}
          <iframe className="card-img-top" width="420" height="500" src={url}></iframe>
          <div className="card-body">
            <h5 className="card-title">{state.videoDetails.snippet.title}</h5>
            <p>{state.videoDetails.snippet.description}</p>
            <p>{state.videoDetails.snippet.publishedAt}</p>
            <p>{state.videoDetails.snippet.channelTitle}</p>
          </div>

          <button className="btn btn-outline-dark" onClick={() => {
            console.log("id: ")
            const action = addToWatchLater(state.videoDetails)   // state.videoDetails.id.videoId
                dispatch(action)
                history.push("/WatchLater")
            }}>Watch Later</button> 
        </div>
      </div>
      </>
    );
  }
  
  export default VideoDetails;