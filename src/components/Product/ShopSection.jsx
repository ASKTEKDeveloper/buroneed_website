import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { imageURL } from "../../axios";
import QuantityControl from "../Cart/QuantityControl";

const ShopSection = ({ products }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const { totalRows, currentPage } = useMemo(() => {
    const totalRows = products.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const currentPage = Math.max(0, Math.min(page, totalPages - 1));
    return { totalRows, currentPage };
  }, [products, page, rowsPerPage]);

  return (
    <section className="shop py-30">
      <div className="container container-lg">
        <div className="row">
          <div className="flex-between gap-16 flex-wrap mb-40 ">
            <span className="text-gray-900">
              Showing {(currentPage + 1) * rowsPerPage + 1 - rowsPerPage}-
              {(currentPage + 1) * rowsPerPage} of {products.length} result
            </span>
          </div>
          {/* Top End */}
          <div className=" row ms-0" style={{ gap: "15px 0" }}>
            {(rowsPerPage > 0
              ? products.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : products
            )?.map((product) => (
              <div
                className="col-Xxl-2 col-lg-3 col-md-4 col-sm-6 col-12"
                key={product.Product_Details_Id}
              >
                <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  <div className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative">
                    <img
                      src={`${imageURL}/${product.Image}`}
                      alt=""
                      className="image-fluid"
                    />
                  </div>
                  <div className="product-card__content mt-10 w-100">
                    <h6 className="title text-md fw-semibold  mb-8 text-line-2">
                      {product.Product_Details_Description}
                    </h6>
                    <div className="product-card__price mt-14">
                      <QuantityControl product={product} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Start */}
          {products.length > rowsPerPage && (
            <ul className="pagination flex-center flex-wrap gap-16">
              <li className="page-item">
                <Link
                  className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                  to="#"
                >
                  <i className="ph-bold ph-arrow-left" />
                </Link>
              </li>
              <li className="page-item active">
                <Link
                  className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                  to="#"
                >
                  01
                </Link>
              </li>

              <li className="page-item">
                <Link
                  className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                  to="#"
                >
                  <i className="ph-bold ph-arrow-right" />
                </Link>
              </li>
            </ul>
          )}
          {/* Pagination End */}

          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
