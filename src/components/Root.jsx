import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Pages</h1>
          <div>    
          <nav>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/About">About me</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
        </div>
        <Outlet />
      </>
    );
  }