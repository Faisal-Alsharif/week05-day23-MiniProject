import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router";
// import { deleteFromWatchLater } from "../reducer/videos/actions";




// there is a problem when adding video to watch later and go to home page it will refresh the page and the watch later will disappear
function WatchLater() {

  // const dispatch = useDispatch();
  // const history = useHistory();
  const state = useSelector ((state) => {
    return {
videoDetails: state.videosReducer.videoDetails,
    }
})

let url = "https://www.youtube.com/embed/" + state.videoDetails.id.videoId;

    return (
      <>
      <div className="cards-container">
        <div className="card">
          {console.log(state.videoDetails.snippet.title)}
          <iframe className="card-img-top" width="420" height="500" src={url}></iframe>
          <div className="card-body">
            <h5 className="card-title">{state.videoDetails.snippet.title}</h5>
          </div>
          <button className="btn btn-outline-danger" onClick={() => {
            // i try to delete the video but there is an error after deleting it
            // const action = deleteFromWatchLater()
            // dispatch(action)
            // history.push("/")
          }}>Delete</button> 
        </div>
      </div>
      </>
    );
  }
  
  export default WatchLater;