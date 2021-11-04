const initialState = {
    videos: [],
    videoDetails: {},
    watchLaterVideos: [],
}

// we have multiple videos so we create reducer
// reducer is a function that takes a (state)
// inside reducer there is a switch statement that checks for the condetions
// {type, payload} is an actions and it is object
// the first time we call reducer it put the default state : (state = initialState)
const videosReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_VIDEOS":
            // console.log(payload)
            return {
                videos: payload,
                videoDetails: state.videoDetails,
                watchLaterVideos: state.watchLaterVideos,
            }

            case "SHOW_VIDEO_DETAILS":
                // console.log(payload)
                return {
                    videoDetails: payload,
                    videos: state.videos,
                    watchLaterVideos: state.watchLaterVideos,
                }

            case "ADD_TO_WATCH_LATER":
                // console.log(state)
                const array = state.watchLaterVideos.slice();
                array.push(payload)
                // console.log("--------------------------------------------")
                // console.log(array)
            return {
                watchLaterVideos: array,
                videos: state.videos,
                videoDetails: state.videoDetails,
            }  

            case "DELETE_FROM_WATCH_LATER":
                return {
                    watchLaterVideos: [],
                    videos: state.videos,
                    videoDetails: state.videoDetails,
                }
                
        default:
            return state;
    }

}

export default videosReducer;