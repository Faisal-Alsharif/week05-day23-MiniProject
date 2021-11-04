

// this is action creator and it takes payload
// (videos) is an array of videos
export const setVideos = (videos) => {
    return {
        type : "SET_VIDEOS",
        payload: videos

    }
}

export const showVideoDetails = (video) => {
    return {
        type : "SHOW_VIDEO_DETAILS",
        payload: video

    }
}

export const addToWatchLater = (video) => {
    return {
        type : "ADD_TO_WATCH_LATER",
        payload: video

    }
}

export const deleteFromWatchLater = () => {
    return {
        type : "DELETE_FROM_WATCH_LATER",
    }
}