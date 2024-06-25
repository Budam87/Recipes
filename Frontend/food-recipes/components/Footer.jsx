import "../css/Footer.css";
import subscribe from "../assets/subscribe.jpg";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="content-wrapper">
        <div className="left-content">
          <div className="sub-image">
            <img src={subscribe} alt="recipes" />
          </div>
          <div className="subscribe">
            <h3>WANT MORE RECIPES FROM BUDDAH?</h3>
            <p>
              Sign up for FREE quick and easy weeknight dinners delivered right
              to your inbox! You'll receive new recipes as soon as they are
              published, plus our top 12 recipes free!
            </p>
            <div className="form">
              <input type="email" placeholder="email address" />
              <Button text="SUBSCRIBE" className="footer-btn"/>
            </div>
          </div>
        </div>
        <div className="right-content">
            <div className="nav-wrapper">
              <div className="nav-bar">
                <h4>QUICK LINKS</h4>
                <ul>
                  <Link to="/about"><li>ABOUT</li></Link>
                  <Link to="/"><li>HOME</li></Link>
                </ul>
              </div>
              <div className="nav-bar">
                <h4>BROWSE</h4>
                <ul>
                  <li><Link to="/recipes">RECIPES</Link></li>
                  <li><Link to="/videos">VIDEOS</Link></li>
                </ul>
              </div>
              <div className="nav-bar">
                <h4>FOLLOW</h4>
                <ul>
                  <a href="https://www.facebook.com/"><li>FACEBOOK</li></a>
                  <a href="https://www.youtube.com/watch?v=QGAJokcwBXI&t=176s"><li>YOUTUBE</li></a>
                  <a href="https://www.instagram.com/"><li>INSTAGRAM</li></a>
                  <a href="https://x.com/"><li>TWITTER</li></a>
                </ul>
              </div>
            </div>
            <div className="all-rights">
                <p>&copy; 2024 Foodie Buddah. All Rights Reserved.</p>
                <ul>
                    <a href="#top"><li>TOP</li></a>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/recipes"><li>BROWSE RECIPES</li></Link>
                    <Link to="/videos"><li>VIDEOS</li></Link>
                </ul>
            </div>
          </div>
      </div>
    </footer>
  );
}
