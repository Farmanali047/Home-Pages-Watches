import React, { useState } from "react";

const TreasureTroves = () => {
  const [selectedCase, setSelectedCase] = useState("1");

  return (
    <div
      className="container-fluid text-center py-5"
      style={{ backgroundColor: "#f7f3ef" }}
    >
      <h2
        className="mb-4"
        style={{
          fontFamily: "'Newsreader', serif",
          fontSize: "14px",
          fontWeight: "400",
          letterSpacing: "1.5px",
          color: "#4d4d4d",
        }}
      >
        TREASURE TROVES
      </h2>

      {/* Render for Smaller Screens */}
      <div className="d-md-none">
        <div
          className="d-flex justify-content-center align-items-center flex-wrap mb-4"
          style={{ gap: "10px" }}
        >
          {selectedCase === "1" && (
            <>
              <div className="text-center" style={{ flex: "1 1 45%" }}>
                <img
                  src="\images\blackRolex.png"
                  alt="Sardaign Vanity Case"
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <h6
                  className="mt-2 text-uppercase"
                  style={{
                    fontFamily: "'Goyard',sans-serif",
                    fontSize: "9px",
                    fontWeight: "bold",
                    lineHeight: "14px",
                    letterSpacing: "0.15em",
                    color: "#183f2",
                  }}
                >
                  Sardaign Vanity Case
                </h6>
              </div>
              <div className="text-center" style={{ flex: "1 1 45%" }}>
                <img
                  src="/images/silver.png"
                  alt="Joux 8 Watch Case"
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <h6
                  className="mt-2 text-uppercase"
                  style={{
                    fontFamily: "'Goyard',sans-serif",
                    fontSize: "9px",
                    fontWeight: "bold",
                    lineHeight: "14px",
                    letterSpacing: "0.15em",
                    color: "#183f2",
                  }}
                >
                  Joux 8 Watch Case
                </h6>
              </div>
            </>
          )}
          {selectedCase === "2" && (
            <>
              <div className="text-center" style={{ flex: "1 1 45%" }}>
                <img
                  src="/images/silver.png"
                  alt="Joux 8 Watch Case"
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <h6
                  className="mt-2 text-uppercase"
                  style={{
                    fontFamily: "'Goyard',sans-serif",
                    fontSize: "9px",
                    fontWeight: "bold",
                    lineHeight: "14px",
                    letterSpacing: "0.15em",
                    color: "#183f2",
                  }}
                >
                  Joux 8 Watch Case
                </h6>
              </div>
              <div className="text-center" style={{ flex: "1 1 45%" }}>
                <img
                  src="/images/golden.png"
                  alt="Paris Case"
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <h6
                  className="mt-2 text-uppercase"
                  style={{
                    fontFamily: "'Goyard',sans-serif",
                    fontSize: "9px",
                    fontWeight: "bold",
                    lineHeight: "14px",
                    letterSpacing: "0.15em",
                    color: "#183f2",
                  }}
                >
                  Paris Case
                </h6>
              </div>
            </>
          )}
        </div>
        <div className="text-center">
          <label className="me-3">
            <input
              type="radio"
              name="case"
              value="1"
              checked={selectedCase === "1"}
              onChange={(e) => setSelectedCase(e.target.value)}
              className="me-1"
            />
          </label>
          <label>
            <input
              type="radio"
              name="case"
              value="2"
              checked={selectedCase === "2"}
              onChange={(e) => setSelectedCase(e.target.value)}
              className="me-1"
            />
          </label>
        </div>
      </div>

      {/* Render for Large Screens */}
      <div className="d-none d-md-flex justify-content-center" style={{ gap: "80px" }}>
        <div className="text-center">
          <img
             src="\images\blackRolex.png"
            alt="Sardaign Vanity Case"
            className="img-fluid"
            style={{
              maxWidth: "300px",
              display: "block",
              margin: "0 auto",
            }}
          />
          <h6
            className="mt-2 text-uppercase"
            style={{
              fontFamily: "'Goyard',sans-serif",
              fontSize: "9px",
              fontWeight: "bold",
              lineHeight: "14px",
              letterSpacing: "0.15em",
              color: "#183f2",
            }}
          >
            Sardaign Vanity Case
          </h6>
        </div>
        <div className="text-center">
          <img
            src="/images/silver.png"
            alt="Joux 8 Watch Case"
            className="img-fluid"
            style={{
              maxWidth: "300px",
              display: "block",
              margin: "0 auto",
            }}
          />
          <h6
            className="mt-2 text-uppercase"
            style={{
              fontFamily: "'Goyard',sans-serif",
              fontSize: "9px",
              fontWeight: "bold",
              lineHeight: "14px",
              letterSpacing: "0.15em",
              color: "#183f2",
            }}
          >
            Joux 8 Watch Case
          </h6>
        </div>
        <div className="text-center">
          <img
            src="/images/golden.png"
            alt="Paris Case"
            className="img-fluid"
            style={{
              maxWidth: "300px",
              display: "block",
              margin: "0 auto",
            }}
          />
          <h6
            className="mt-2 text-uppercase"
            style={{
              fontFamily: "'Goyard',sans-serif",
              fontSize: "9px",
              fontWeight: "bold",
              lineHeight: "14px",
              letterSpacing: "0.15em",
              color: "#183f2",
            }}
          >
            Paris Case
          </h6>
        </div>
      </div>
    </div>
  );
};

export default TreasureTroves;