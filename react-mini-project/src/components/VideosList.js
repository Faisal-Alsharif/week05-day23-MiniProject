

function VideosList({image, title, key, id}) {

    let url = "https://www.youtube.com/embed/" + id;
    // console.log(url)

    return (
      <>
                    {/* <iframe className="card-img-top" width="420" height="345" src={url}>
                    </iframe> */}
                   <img className="card-img-top" src={image}/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    </div> 
      </>
    );
  }
  
  export default VideosList;