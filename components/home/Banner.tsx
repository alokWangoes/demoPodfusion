import "./banner.css"
const Banner = () => {
    return(
        <>
        <div className="banner-section">

        <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12">
                    <div className="banner-content">
                        <h2>Make your <span>own</span> signature <span>style</span></h2>
                        <p className="common-content">Lorem ipsum dolor sit amet consectetur. Id rhoncus a curabitur massa aliquet ipsum velit convallis lacus. Orci magna enim arcu orci amet.</p>
                        <button className="banner-btn">Try Now</button>
                    </div>
            </div>
            <div className="col-md-6 col-xl-6 col-sm-12 banner-image">
                <img src="/banner.png" alt="banner-img"/>
            </div>
        </div>
        </div>
        </>
    )
}
export default Banner;