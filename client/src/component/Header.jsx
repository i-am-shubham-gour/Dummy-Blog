import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <div className="container p-1 border border-3 mt-3 rounded-pill shadow-lg">
          <div className="col-6 mx-auto text-center  rounded-pill p-1">
            <h1
              style={{
                fontSize: "70px",
                color: "black",
                fontFamily: "sans-serif",
              }}
            >
              
              Welcome to My Blog
            </h1>
          </div>
          <div className=" p-2 fs-4 d-flex flex-row-reverse mt-3 ">
            <div className="me-5 ">
              <Link to="/createPost" className="text-decoration-none">
                <span
                  className=" p-2 rounded-pill me-4 text-center"
                  style={{
                    cursor: "pointer",
                    color: "black",
                    fontFamily: "sans-serif",
                  }}
                >
                  
                  Create Post <i className="fad fa-plus-octagon"></i>
                </span>
              </Link>
              <Link to="/myPost" className="text-decoration-none">
                <span
                  className=" p-2 rounded-pill text-center "
                  style={{
                    cursor: "pointer",
                    color: "black",
                    fontFamily: "sans-serif",
                  }}
                >
                  
                  MyPost
                </span>
              </Link>
            </div>
          </div>
        </div>
        <hr className="mx-auto" style={{ width: "1300px" }}></hr>
      </div>
    </div>
  );
};

export default Header;
