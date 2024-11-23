import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Bags = () => {
  const [selectedCase, setSelectedCase] = useState("1");

  const bags = [
    {
      img: "/images/blue.jpg",
      title: "CISALPIN BACKPACK JET BLACK",
    },
    {
      img: "/images/brown.png",
      title: "AMBASSADE MM DOCUMENT CASE JET BLACK",
    },
    {
      img: "/images/lether.png",
      title: "BOURGET PM TROLLEY CASE JET BLACK",
    },
  ];

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
        AS DEEP AS THE OCEAN
      </h2>

      {/* Render for Smaller Screens */}
      <div className="d-md-none">
        <div
          className="d-flex justify-content-center align-items-center flex-wrap mb-4"
          style={{ gap: "10px" }}
        >
          {selectedCase === "1" && (
            <>
              {bags.slice(0, 2).map((bag, index) => (
                <div
                  className="text-center position-relative bag-container"
                  style={{ flex: "1 1 45%" }}
                  key={index}
                >
                  <img
                    src={bag.img}
                    alt={bag.title}
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <h6
                    className="mt-2 text-uppercase"
                    style={{
                      fontFamily: "'Goyard', sans-serif",
                      fontSize: "9px",
                      fontWeight: "bold",
                      lineHeight: "14px",
                      letterSpacing: "0.15em",
                      color: "#183f2",
                    }}
                  >
                    {bag.title}
                  </h6>
                  <p
                    className="see-all-colors"
                    style={{
                      fontFamily: "'Goyard', sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: "#4d4d4d",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  >
                    See all colors
                  </p>
                  <div className="hover-icon"></div>
                </div>
              ))}
            </>
          )}
          {selectedCase === "2" && (
            <>
              {bags.slice(1, 3).map((bag, index) => (
                <div
                  className="text-center position-relative bag-container"
                  style={{ flex: "1 1 45%" }}
                  key={index}
                >
                  <img
                    src={bag.img}
                    alt={bag.title}
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <h6
                    className="mt-2 text-uppercase"
                    style={{
                      fontFamily: "'Goyard', sans-serif",
                      fontSize: "9px",
                      fontWeight: "bold",
                      lineHeight: "14px",
                      letterSpacing: "0.15em",
                      color: "#183f2",
                    }}
                  >
                    {bag.title}
                  </h6>
                  <p
                    className="see-all-colors"
                    style={{
                      fontFamily: "'Goyard', sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: "#4d4d4d",
                      marginTop: "5px",
                      cursor: "pointer",
                    }}
                  >
                    See all colors
                  </p>
                  <div className="hover-icon"></div>
                </div>
              ))}
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
        {bags.map((bag, index) => (
          <div className="text-center position-relative bag-container" key={index}>
            <img
              src={bag.img}
              alt={bag.title}
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
                fontFamily: "'Goyard', sans-serif",
                fontSize: "9px",
                fontWeight: "bold",
                lineHeight: "14px",
                letterSpacing: "0.15em",
                color: "#183f2",
              }}
            >
              {bag.title}
            </h6>
            <p
              className="see-all-colors"
              style={{
                fontFamily: "'Goyard', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.1em",
                color: "#4d4d4d",
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              See all colors
            </p>
            <div className="hover-icon"></div>
          </div>
        ))}
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .bag-container {
            position: relative;
          }

          .bag-container img {
            position: relative;
            z-index: 1;
          }

          .bag-container:hover .see-all-colors {
            visibility: hidden;
          }

          .bag-container:hover .hover-icon {
            opacity: 1;
            pointer-events: auto;
          }

          .hover-icon {
            position: absolute;
            top: 94%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background-color: black;
            border-radius: 50%;
            opacity: 0;
            z-index: 2;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default Bags;
