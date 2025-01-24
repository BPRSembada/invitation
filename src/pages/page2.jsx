import React from "react";
import "../css/two.css";
import Table from "react-bootstrap/Table";

const Page_two = () => {
  return (
    <div>
      <div className="main_two" data-aos="fade-up" data-aos-duration="1000">
        <div
          className="header_two"
          data-aos="fade-down-right"
          data-aos-duration="1500"
        >
          <img src="assets/lampion_2.png" alt="Header" />
        </div>
        <div className="content_two">
          <div
            className="hiburan_two"
            data-aos="zoom-in-up"
            data-aos-duration="1800"
          >
            <img src="assets/hiburan.png" alt="" />
          </div>
          <div className="head_ctwo">
            <h2>RUNDOWN</h2>
            <div>
              <h3>Perayaan Imlek</h3>
              <h3>Bersama Bank Sembada</h3>
            </div>
          </div>
          <div className="cont_rundown">
            <table className="tabel_run">
              <tbody>
                <tr>
                  <td>10.00 - 10.30</td>
                  <td className="td_2">
                    : <span>Registrasi dan Penampilan Guzheng</span>
                  </td>
                </tr>
                <tr>
                  <td>10.30 - 10.45</td>
                  <td className="td_2">
                    : <span>Pembukaan Acara</span>
                  </td>
                </tr>
                <tr>
                  <td>10.45 - 11.05</td>
                  <td className="td_2">
                    : <span>Tarian Barongsai</span>
                  </td>
                </tr>
                <tr>
                  <td>11.05 - 11.15</td>
                  <td className="td_2">
                    : <span>Kata Sambutan</span>
                  </td>
                </tr>
                <tr>
                  <td>11.15 - 11.30</td>
                  <td className="td_2">
                    : <span>Launching Program Tahun 2025</span>
                  </td>
                </tr>
                <tr>
                  <td>11.30 - 12.20</td>
                  <td className="td_2">
                    : <span>Makan Siang Bersama</span>
                  </td>
                </tr>
                <tr>
                  <td>12.20 - 12.40</td>
                  <td className="td_2">
                    : <span>Doorprize</span>
                  </td>
                </tr>
                <tr>
                  <td>12.40 - 13.15</td>
                  <td className="td_2">
                    : <span>Penutupan Acara</span>
                  </td>
                </tr>
                <tr>
                  <td>13.15- 13.30</td>
                  <td className="td_2">
                    : <span>Foto Bersama</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="footer_two">
          <img
            src="assets/kipas2.png"
            alt="Footer Left"
            className="footer_left"
            data-aos="fade-right"
            data-aos-duration="1700"
          />
          <img
            src="assets/barongsai_1.png"
            alt="Footer Right"
            className="footer_right"
            data-aos="fade-left"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
  );
};

export default Page_two;
