import React, { useState, useEffect, useContext } from "react";
import "../css/cover.css";
import Page_one from "./page1";
import Page_two from "./page2";
import Page_three from "./page3";
import AudioContext from "../context/Adiocontext";

const Cover = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [name, setName] = useState("");
  const { playAudio } = useContext(AudioContext);

  const Undangan = () => {
    const params = new URLSearchParams(window.location.search);
    const toValue = params.get("to"); // Mengambil nilai dari parameter "to"

    if (toValue) {
      const decodedName = decodeURIComponent(toValue); // Decode untuk mengganti %20 menjadi spasi
      setName(decodedName); // Set nilai ke state
    }
  };
  // Mencegah atau mengaktifkan scroll berdasarkan state
  useEffect(() => {
    Undangan();
    // if (!isButtonClicked) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }

    // return () => {
    //   document.body.style.overflow = "auto";
    // };
    document.body.style.overflow = isButtonClicked ? "auto" : "hidden";
  }, [isButtonClicked, name]);

  const handleButtonClick = () => {
    setIsButtonClicked(true); // Ubah state menjadi aktif
    playAudio(); // Trigger audio playback
    const nextSection = document.querySelector(".page_content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" }); // Scroll ke bagian berikutnya
    }
  };
  return (
    <>
      <div className="main_cover">
        <div
          className="header_cover"
          data-aos="fade-down-right"
          data-aos-duration="1500"
        >
          <img src="assets/lampion_1.png" alt="" />
        </div>
        <div className="conten_cover">
          <div className="cont_header_cover">
            <img
              src="assets/logo.png"
              alt=""
              className="logo"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-delay="1000"
            />
            <img
              src="assets/main_barongsai.png"
              alt=""
              className="main_barongsasi"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="1500"
            />
          </div>
          <div
            className="greeting_cover"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="2000"
          >
            <h2>You're cordially invited</h2>
            <div>
              <h3>Perayaan Imlek </h3>
              <h3>Bersama Bank Sembada</h3>
            </div>
          </div>
          <div
            className="to"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="2000"
          >
            <h3>Kepada Yth :</h3>
            <h2>Bpk/Ibu {name ? name : "Tamu Undangan"}</h2>
          </div>
          <button
            className="button_cover"
            onClick={handleButtonClick}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="2100"
          >
            Open Invitation
          </button>
        </div>
        <div
          className="footer_cover"
          data-aos="fade-up-left"
          data-aos-duration="1500"
          // data-aos-delay="1000"
        >
          <img src="assets/ular_1.png" alt="" />
        </div>
      </div>
      <div className="page_content">
        <Page_one />
      </div>
      <div>
        <Page_two />
      </div>
      <div>
        <Page_three />
      </div>
    </>
  );
};

export default Cover;
