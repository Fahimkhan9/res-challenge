import stayprojectillus from "../../images/stayproject.png";
import "./StayProject.css";
const StayProject = () => {
  return (
    <section className="stayproject pt-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 order-md-2">
            <h3>Stay and Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem fugiat voluptatum illo facere harum itaque, nostrum
              perferendis quos optio animi, amet error rerum fuga vel! Non optio
              eaque reprehenderit deleniti!
            </p>
            <button className="btn btn-primary btn-radius">Contact US</button>
          </div>
          <div className="col-md-6 ">
            <img
              src={stayprojectillus}
              alt="stayproject"
              className="stayproject"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayProject;
