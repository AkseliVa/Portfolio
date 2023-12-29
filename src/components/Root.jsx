import { Outlet, Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h2>Pages</h2>
          <h1><SocialIcon url="https://www.linkedin.com/in/akseli-vartiainen-724a57262/" /></h1>
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