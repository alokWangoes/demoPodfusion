import "./mainsection.css";
const Mainsection = () => {
  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="row main">
            <div className="col-md-12 col-xl-12 col-sm-12">
              <h3>
                What do you get with <img src="/logo.svg" /> ?
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-xl-4 col-sm-12">
                <div className="block-section">
                    <img src="./Frame-29.png"/>
                </div>
                <div className="block-content">
                    <h3>Connect multiple providers together</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim turpis integer gravida sed.</p>
                </div>
            </div>
            <div className="col-md-4 col-xl-4 col-sm-12">
                <div className="block-section">
                    <img src="./Frame-29.png"/>
                </div>
                <div className="block-content">
                    <h3>Connect multiple providers together</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim turpis integer gravida sed.</p>
                </div>
            </div>
            <div className="col-md-4 col-xl-4 col-sm-12">
                <div className="block-section">
                    <img src="./Frame-29.png"/>
                </div>
                <div className="block-content">
                    <h3>Connect multiple providers together</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim turpis integer gravida sed.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mainsection;
