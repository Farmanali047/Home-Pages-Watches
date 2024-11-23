import React from "react";
import "../GoyardGazette.css"; // Custom styles
import PersonalizeButton from "./PersonalizeButton";

const GoyardGazette = () => {
    return (
        <div className="container">
            <div className="gazette-container">
                <div className="row align-items-center">

                    {/* Left Section */}

                    <div className="col-lg-4 col-md-6 offset-lg-2 gazette-left">
                        <h1 className="gazette-title">The Eternis Gazette</h1>
                        <p className="gazette-subtitle">
                            Subscribe to the Gazette and be the first to receive the latest news
                            from Maison Goyard.
                        </p>
                        <form className="gazette-form">
                            <input
                                type="email"
                                className="form-control email-input"
                                placeholder="Your email address"
                                required
                            />
                            <PersonalizeButton dataElement="Submit" url="www.google.com" colore="#1a3a6e" />
                        </form>
                    </div>

                    {/* Right Section */}

                    <div className="col-lg-6 col-md-6 text-center"> 
                     <div className="video-gif">
                     <video
                            src="/Videos/try2.mp4"
                            autoPlay
                            loop
                            muted
                            style={{
                                height: '168px',
                                width: '300px',
                                transform: 'rotate(-25deg)',
                                boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.3)',
                            }}
                        />
                     </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoyardGazette;