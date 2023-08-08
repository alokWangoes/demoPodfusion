"use client";
import "./mainsection.css";

const Mainsection = () => {
  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="row main">
            <div className="col-md-12 col-xl-12 col-sm-12 mt-3">
              <h3>
                What do you get with <img src="/logo.svg" /> ?
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-xl-4 col-sm-12">
              <div className="block-section">
                <img src="./Frame-29.png" />
              </div>
              <div className="block-content">
                <h3>Connect multiple providers together</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mauris mi etiam
                  dignissim turpis integer gravida sed.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-sm-12">
              <div className="block-section">
                <img src="./Frame 27.png" />
              </div>
              <div className="block-content">
                <h3>Automate your print on demand</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Urna eget lectus
                  tempor massa rutrum pellentesque.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-sm-12">
              <div className="block-section">
                <img src="./Frame 30.png" />
              </div>
              <div className="block-content">
                <h3>Automate your print on demand</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. A donec mauris
                  faucibus luctus mauris vitae orci.
                </p>
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-4 col-xl-4 col-sm-12">
              <div className="block-section">
                <img src="./Frame 31.png" />
              </div>
              <div className="block-content">
                <h3>Multiple print on demand providers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Fames magna amet
                  mattis morbi sit nunc.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-sm-12">
              <div className="block-section">
                <img src="./Frame 28.png" />
              </div>
              <div className="block-content">
                <h3>Create your own automation flow</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Fames magna amet
                  mattis morbi sit nunc.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-sm-12">
              <div className="block-section">
                <img src="./Frame 32.png" />
              </div>
              <div className="block-content">
                <h3>Multiple print on demand providers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Fames magna amet
                  mattis morbi sit nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="second-wrapper">
          <div className="row">
            <div className="main-section-body">
              <div className="main-section-inner-box">
                <div className="main-section-left-part">
                  <div className="main-section-title">
                    <span className="title-span">
                      Lorem ipsum dolor sit amet consectetur
                    </span>
                  </div>
                  <div>
                    <div className="main-section-content">
                      <span className="content-span">
                        Lorem ipsum dolor sit amet consectetur. Ante leo odio
                        luctus urna est risus euismod. Semper quis porttitor
                        lorem malesuada nisl a non imperdiet. Fames aenean
                        cursus at netus.
                      </span>
                    </div>
                    <div className="main-section-button-div">
                      <button className="main-section-button">SUBSCRIBE</button>
                    </div>
                  </div>
                </div>

                <div className="right-part">
                  <span className="main-section-right-part"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mainsection;
