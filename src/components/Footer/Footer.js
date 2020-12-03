import logo from "../../images/Group 86.png";
import fblogo from "../../images/facebook-logo-in-circular-shape@2x.png";
import twitterlogo from "../../images/twitter (4)@2x.png";
import dribblelogo from "../../images/dribbble (1)@2x.png";
import linkedinlogo from "../../images/linkedin (2)@2x.png";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer pt-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <img src={logo} alt="logo" className="pb-3 logo" />
            <div className="d-flex ">
              <img src={fblogo} alt="fblogo" className=" social-logos " />
              <img
                src={twitterlogo}
                alt="twitterlogo"
                className=" social-logos"
              />
              <img
                src={linkedinlogo}
                alt="linkedinlogo"
                className=" social-logos"
              />
              <img
                src={dribblelogo}
                alt="dribblelogo"
                className=" social-logos"
              />
            </div>
          </div>
          <div className="col-md-3">
            <ul style={{ listStyle: "none" }}>
              <li>Features</li>
              <li>Enterprise</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="col-md-3">
            <ul style={{ listStyle: "none" }}>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Stats</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul style={{ listStyle: "none" }}>
              <li>About us</li>
              <li>Terms of service</li>
              <li>Security</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
