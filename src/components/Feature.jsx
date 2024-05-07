import tickmark from "../Assets/images/svg/tick-mark-svg.svg";
import mobile_phone from "../Assets/images/webp/mobile.png";
import mobile_bg from "../Assets/images/webp/ellipse.png";
import { useState } from "react";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-lg-5 mb-31 position-relative ">
      <div className="container pt-3 pt-md-5 mt-2">
        <button className="mx-auto feature_btn mb-2 fs-sm fw-semibold ff-sans lh-24 off-green d-flex justify-content-center">
          OUR FEATURES
        </button>
        <h1 className="fs-xl fw-bold ff-roboto mb-md-3 mb-2 off-black lh-57 text-center">
          Evexia Features: Revolutionize
          <span className=" off-green  mb-md-3 mb-2"> Your Wellness</span>
        </h1>
        <p className="fs-sm fw-normal ff-sans off-gray lh-25 text-center mb-md-5">
          Your path to wellness, Tailored down to your DNA
        </p>
        <div className="overflow-x-auto custom_scrollbar mt-2 overflow-x-scroll ">
          <div className="d-flex align-items-center justify-content-center pt-2 mt-1 w-1000   tabs_gap">
            <a
              onClick={() => handleTabClick("tab1")}
              className={`tab_btn  font-gradient text-decoration-none fs-sm fw-semibold  lh-25 ff-sans d-flex justify-content-center align-items-center flex-nowrap ${
                activeTab === "tab1" ? "tab_1" : ""
              }`}
              href="#"
            >
              DNA-customized nutrition
            </a>
            <a
              onClick={() => handleTabClick("tab2")}
              className={`tab_btn  font-gradient text-decoration-none fs-sm fw-semibold  lh-25 ff-sans d-flex justify-content-center align-items-center flex-nowrap ${
                activeTab === "tab2" ? "tab_1" : ""
              }`}
              href="#"
            >
              Fitness that fits you
            </a>
            <a
              onClick={() => handleTabClick("tab3")}
              className={`tab_btn  text-decoration-none font-gradient fs-sm fw-semibold  lh-25 ff-sans d-flex justify-content-center align-items-center flex-nowrap ${
                activeTab === "tab3" ? "tab_1" : ""
              }`}
              href="#"
            >
              Mind matters
            </a>
            <a
              onClick={() => handleTabClick("tab4")}
              className={`tab_btn  text-decoration-none font-gradient  fs-sm fw-semibold lh-25 ff-sans d-flex justify-content-center align-items-center flex-nowrap ${
                activeTab === "tab4" ? "tab_1" : ""
              }`}
              href="#"
            >
              Wellness, tracked and tailored
            </a>
          </div>
        </div>
        <div className="row align-items-center justify-content-between pt-4 py-md-5">
          <div className="col-lg-7 position-relative z-3 mt-lg-5">
            {activeTab === "tab1" && (
              <div className="d-flex flex-column justify-content-center justify-content-lg-start  pt-lg-5 mt-lg-5">
                <h1 className="fs-xl text-center text-md-start fw-bold ff-roboto lh-76 text-black mb-md-3 mb-2">
                  DNA-customized nutrition
                </h1>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Deep dive into your DNA: get to the heart of your health
                    with in-depth genomic insights
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Beyond genetics: integrate comprehensive exam results for a
                    full health picture
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Track, adjust, improve: dynamic tracking aligns your
                    lifestyle with your genetic blueprint for tangible wellness
                    wins
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    See your health holistically: Evexia gives you a 360º view
                    of your wellness, integrating every health aspect into one
                    comprehensive roadmap
                  </p>
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="d-flex flex-column justify-content-center justify-content-lg-start  pt-lg-5 mt-lg-5">
                <h1 className="fs-xl text-center text-md-start fw-bold ff-roboto lh-76 text-black mb-md-3 mb-2">
                  Fitness that fits you{" "}
                </h1>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Track, adjust, improve: dynamic tracking aligns your
                    lifestyle with your genetic blueprint for tangible wellness
                    wins
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    See your health holistically: Evexia gives you a 360º view
                    of your wellness, integrating every health aspect into one
                    comprehensive roadmap
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Deep dive into your DNA: get to the heart of your health
                    with in-depth genomic insights
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Beyond genetics: integrate comprehensive exam results for a
                    full health picture
                  </p>
                </div>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="d-flex flex-column justify-content-center justify-content-lg-start  pt-lg-5 mt-lg-5">
                <h1 className="fs-xl text-center text-md-start fw-bold ff-roboto lh-76 text-black mb-md-3 mb-2">
                  Mind matters{" "}
                </h1>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Beyond genetics: integrate comprehensive exam results for a
                    full health picture
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Track, adjust, improve: dynamic tracking aligns your
                    lifestyle with your genetic blueprint for tangible wellness
                    wins
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Deep dive into your DNA: get to the heart of your health
                    with in-depth genomic insights
                  </p>
                </div>

                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    See your health holistically: Evexia gives you a 360º view
                    of your wellness, integrating every health aspect into one
                    comprehensive roadmap
                  </p>
                </div>
              </div>
            )}
            {activeTab === "tab4" && (
              <div className="d-flex flex-column justify-content-center justify-content-lg-start pt-lg-5 mt-lg-5">
                <h1 className="fs-xl text-center text-md-start fw-bold ff-roboto lh-76 text-black mb-md-3 mb-2">
                  Wellness, tracked and tailored{" "}
                </h1>

                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Deep dive into your DNA: get to the heart of your health
                    with in-depth genomic insights
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Beyond genetics: integrate comprehensive exam results for a
                    full health picture
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    Track, adjust, improve: dynamic tracking aligns your
                    lifestyle with your genetic blueprint for tangible wellness
                    wins
                  </p>
                </div>
                <div className="d-flex align-items-start mb-md-3 mb-2 gap-14">
                  <img className="tickmark_svg" src={tickmark} alt="tickmark" />
                  <p className="fs-sm fw-normal mw_469 ff-sans lh-25 off-gray mb-0">
                    See your health holistically: Evexia gives you a 360º view
                    of your wellness, integrating every health aspect into one
                    comprehensive roadmap
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4 d-flex pt-4 pt-lg-0 justify-content-center">
            <img
              className="mobile_phone me-lg-5 position-relative z-3"
              src={mobile_phone}
              alt="phone"
            />
          </div>
        </div>
      </div>
      <img
        className=" mobile_bg position-absolute z-1"
        src={mobile_bg}
        alt="phone-background"
      />
    </div>
  );
};

export default Feature;
