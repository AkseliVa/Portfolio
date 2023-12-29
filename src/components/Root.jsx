import { Outlet, Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

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
        <div id="links">
          <SocialIcon id="link" label="LinkedIn" url="https://www.linkedin.com/in/akseli-vartiainen-724a57262/" />
          <SocialIcon id="link" label="GitHub" url="https://github.com/AkseliVa" />
        </div>
        </div>
        
        <Outlet />
      </>
    );
  }