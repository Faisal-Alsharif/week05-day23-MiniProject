
import { useHistory } from "react-router-dom";



function Navigation() {
    const history = useHistory();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a onClick={() => {history.replace("/")}} className="nav-link active" aria-current="page" href="">Home</a>
              </li>
              <li className="nav-item">
                <a onClick={() => {history.push("/WatchLater")}} className="nav-link" href="">Watch Later</a>
              </li>
            </ul>
            <form className="d-flex">
              <input type="text" className="form-control me-2" id="my-text" placeholder="Search for video"/>
            </form>
        </div>
      </nav>
    );
  }
  
  export default Navigation;
