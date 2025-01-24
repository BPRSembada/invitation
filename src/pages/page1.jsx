import React from "react";
import "../css/one.css";
import Countdown from "../componen/countdown";
import { FaWhatsapp } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const Page_one = () => {
  return (
    <div className="main_one" data-aos="fade-up" data-aos-duration="1000">
      <div
        className="header_one"
        data-aos="fade-down-right"
        data-aos-duration="1500"
      >
        <img src="assets/kipas.png" alt="Header" />
      </div>
      <div className="content_one">
        <div className="head_cone">
          <h2>DON’T MISS IT</h2>
          <div>
            <h3>Perayaan Imlek</h3>
            <h3>Bersama Bank Sembada</h3>
          </div>
        </div>
        <div className="cont_header_one">
          <img
            src="assets/calendar_icon.png"
            alt=""
            className="icon_calendar"
          />
          <div className="cont_time_one">
            <h4 className="atas">Jumat, 07 Februari 2025</h4>
            <h4 className="bawah">10.30 WIB - Selesai</h4>
          </div>
        </div>
        <div className="cont_header_one">
          <img src="assets/map_icon.png" alt="" className="icon_calendar" />
          <div className="cont_time_one">
            <h4 className="atas">ASEAN TOWER Lantai 1.</h4>
            <h4 className="bawah">
              Jl KH Samanhudi no 10, <br />
              Pasar Baru, Jakarta Pusat,
            </h4>
          </div>
        </div>
        <a
          className="button_one"
          style={{ textDecoration: "none" }}
          href="https://www.google.com/maps/dir//PT.+BPR+Multi+Sembada+Dana,+New+Market,+AseanTower,+Jl.+Samanhudi+Kel+No.10,+RT.1%2FRW.2,+Ps.+Baru,+Kecamatan+Sawah+Besar,+Kota+Jakarta+Pusat,+Daerah+Khusus+Ibukota+Jakarta+10710/@-6.1628341,106.5242596,11z/data=!4m18!1m8!3m7!1s0x2e69f5db31cfffff:0xe470c408c1219a57!2sPT.+BPR+Multi+Sembada+Dana!8m2!3d-6.1628341!4d106.8291302!15sCgxiYW5rIHNlbWJhZGFaDiIMYmFuayBzZW1iYWRhkgEQY29ycG9yYXRlX29mZmljZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOU2IwOHlPSFpSUlJBQuABAPoBBAgAEDA!16s%2Fg%2F11tmy_mtbf!4m8!1m0!1m5!1m1!1s0x2e69f5db31cfffff:0xe470c408c1219a57!2m2!1d106.8292026!2d-6.1628321!3e3?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <LuMapPin className="icon_btn" />
          View Map
        </a>
        <Countdown />
        <a
          className="button_one button_2"
          href="https://wa.me/6289513939445"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <FaWhatsapp className="icon_btn" />
          Contact person
        </a>
      </div>
      <div className="footer_one">
        <img
          src="assets/cici.png"
          alt="Footer Left"
          className="footer_left"
          data-aos="fade-right"
          data-aos-duration="1700"
        />
        <img
          src="assets/koko.png"
          alt="Footer Right"
          className="footer_right"
          data-aos="fade-left"
          data-aos-duration="1500"
        />
      </div>
    </div>
  );
};

export default Page_one;
