import PersonalizeButton from "./PersonalizeButton";

const TheArt = () => {
    return (
        <div
            className="container-fluid"
            style={{
                backgroundColor: "#f5f1ee",
                padding: "0",
                paddingTop:'100px'
               
            }}
        >
            <div
                className="row no-gutters"
                style={{
                    marginTop: "50" // Avoid default row margins
                }}
            >
                {/* Column with text */}
                <div
                    className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center"
                    style={{
                        height: "100%", // Full height of parent
                        textAlign: "center",

                    }}
                >
                    <div>
                        <div style={{  fontFamily: "'Newsreader', serif", marginBottom: "20px",marginTop:'70px' }}>
                            <h2>THE ART</h2>
                            <h2>OF</h2>
                            <h2>MARQUAGE</h2>
                        </div>
                        <div
                            style={{
                                fontWeight: "lighter",
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                marginBottom: "20px",
                            }}
                        >
                            <p>AN ANCESTRAL</p>
                            <p>TRADITION</p>
                        </div>
                        <PersonalizeButton dataElement="PERSONALIZE ONLINE" url="https://www.goyard.com/eu_en/online-personalisation.html" colore="black"/>
                    </div>
                </div>

                {/* Column with image */}
                <div
                    className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center"
                    style={{
                        minHeight: "40vh", // Adjust minimum height on smaller screens
                        height: "90%", // Keep max height at 100% viewport
                        backgroundColor: "#f5f1ee",
                    }}
                >
                    <img
                        src="/images/box4.png"
                        alt="Bag 1"
                        className="img-fluid d-block w-100" // Ensure image is visible on all screen sizes
                        style={{
                            objectFit: "cover",
                            height:'500px'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TheArt;
