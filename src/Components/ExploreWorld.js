import PersonalizeButton from "./PersonalizeButton";

const ExploreWorld = () => {
    return (
        <div className="container-bag">
            <div className="container" style={{paddingTop:'40px'}}>
                <div className="row">
                    <p
                        style={{ fontSize: "14px", fontFamily: "Newsreader", margin: "16px 0" }}
                        className="text-center"
                    >
                        EXPLORE THE WORLD OF GOYARD
                    </p>
                </div>
                <div className="row my-1">
                    {/* First Column with Image and Button */}
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12  button mb-3">
                        <img
                            src="/images/aiMalik.jpg"
                            alt="Bag 1"
                            className="img-fluid w-sm-100"
                            style={{ maxWidth: "100%", marginBottom: "15px" }}
                        />
                        <PersonalizeButton
                            dataElement="Goyard Official"
                            url="https://www.goyard.com/eu_en/online-personalisation.html"
                            colore="black"
                        />

                    </div>

                    {/* Second Column with Image and Button */}
                    <div className="col-lg-6 col-md-6 col-sm-12 button mt-5">
                        <img
                            src="/images/ai4.jpg"
                            alt="Bag 2"
                            className="img-fluid w-sm-100"
                            style={{ maxWidth: "100%", marginBottom: "15px" }}
                        />
                       <span className="mb-5"> <PersonalizeButton
                            dataElement="Discover"
                            url="https://www.goyard.com/eu_en/online-personalisation.html"
                            colore="black"
                        /></span>
                    </div>
                </div>
            </div>
            
                
                
                
                <img
                    src="/images/hulot.webp"
                    alt="logo"
                    className="d-none d-md-block white-dog"
                    style={{ maxWidth: "100%", width: "123px", height: "93px", marginLeft: "10px" }}
                />
          

        </div>
    );
};

export default ExploreWorld;
