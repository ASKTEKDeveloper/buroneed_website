import React from "react";
import logo from "../../assets/header/footer-logo.png";

const BottomFooter = () => {
  return (
    <div className="bottom-footer  bg-color-one py-4">
      <div className="container container-lg">
        <div className="bottom-footer__inner flex-center flex-wrap gap-16 text-center py-3">
          <p className="bottom-footer__text text-center text-13">
            © Copyright 2024. Buroneed. All rights reserved. | Designed and
            developed by ASK Technologies{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
