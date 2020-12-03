import "./HeroSection.css";
import heroillus from "../../images/heroillus.png";
const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="container">
        <div className="row d-flex align-items-center ">
          <div className="col-md-6 ">
            <h2>Florence Agency</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              aut sequi eius explicabo aspernatur tenetur animi ipsam dicta
              voluptates. Vel perspiciatis molestias aliquid repellendus dolorum
              in saepe quas itaque, minima omnis possimus quis beatae quae ullam
              est maxime tempora odit autem magni quos laboriosam fugiat. At
              ducimus eius dignissimos commodi.
            </p>
            <button className="btn btn-primary btn-radius">See Pricing</button>
          </div>
          <div className="col-md-6">
            <img src={heroillus} alt="heroillus" className="heroillus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
