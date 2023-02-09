import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left footer">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <span className="text-dark" href="https://mdbootstrap.com/">
          Bu platform kar amacı gütmeden depremzedelerin tanıdığı kişilere hızlı
          ulaşabilmesi için üretildi ,hiçbir kurum ve kuruluşla ilişiği yoktur.
          Gerektiğinde yetkili merci ve kurumlara bilgi sağlanabilir ve
          işbirliği yapılabilir.
        </span>
      </div>
    </MDBFooter>
  );
};

export default Footer;
