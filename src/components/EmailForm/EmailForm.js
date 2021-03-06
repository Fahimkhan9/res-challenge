import "./EmailForm.css";
const EmailForm = () => {
  return (
    <section className="emailform pt-5">
      <div className="container">
        <h3 className="text-center pb-3">Get your design right,right now</h3>
        <p className="text-center pb-2">
          Be the first of our latest offers and updated
        </p>
        <div className="form">
          <input
            type="text"
            className="form-control mb-3  email-input"
            placeholder="Enter your email address"
          />
          <button
            className="btn btn-primary btn-radius ml-2 mb-2"
            type="submit"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
