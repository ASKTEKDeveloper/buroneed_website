import React from "react";
import { Link } from "react-router-dom";

const PromotionalOneBuroNeel = () => {
  return (
    <section className="promotional-banner pt-20">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-3 col-sm-6 col-xs-6">
            <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
              <img
                src="assets/images/thumbs/promotional-banner-img1.png"
                alt="Office Stationery Items"
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="promotional-banner-item__content">
                <h6 className="promotional-banner-item__title text-32">
                  Office Stationery Items
                </h6>
                <Link
                  to="/office-stationary"
                  className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                >
                  Explore
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-xs-6">
            <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
              <img
                src="assets/images/thumbs/promotional-banner-img2.png"
                alt="Cleaning Products Range"
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="promotional-banner-item__content">
                <h6 className="promotional-banner-item__title text-32">
                  Cleaning Products Range
                </h6>
                <Link
                  to="/cleaning-solutions"
                  className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                >
                  Explore
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-xs-6">
            <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
              <img
                src="assets/images/thumbs/promotional-banner-img3.png"
                alt="Kitchen Pantry Supplies"
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="promotional-banner-item__content">
                <h6 className="promotional-banner-item__title text-32">
                  Kitchen Pantry Supplies
                </h6>
                <Link
                  to="/kitchen-party-consumables"
                  className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                >
                  Explore
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-xs-6">
            <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
              <img
                src="assets/images/thumbs/promotional-banner-img4.png"
                alt="Corporate Gifting Solutions"
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="promotional-banner-item__content">
                <h6 className="promotional-banner-item__title text-32">
                  Corporate Gifting Solutions
                </h6>
                <Link
                  to="/corporate-gifting"
                  className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                >
                  Explore
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalOneBuroNeel;