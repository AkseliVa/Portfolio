import { Outlet, NavLink } from "react-router-dom";
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
                <NavLink to="/">Homepage</NavLink>
              </li>
              <li>
                <NavLink to="/About">About me</NavLink>
              </li>
              <li>
                <NavLink to="/Projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
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