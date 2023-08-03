import Plan from "./Plan";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <>
      <div>
        <div className="text-center subscribe-text">
          <p>Choose the Plan that Fits</p>
          <p>Your Business </p>
        </div>
        <div className="text-left subscribe-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
            explicabo.
          </p>
        </div>
        <div className="text-center plan">
          <Plan />
        </div>
      </div>
    </>
  );
};

export default Subscribe;
