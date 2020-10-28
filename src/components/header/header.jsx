import React, { Component } from "react";
import classes from "./style.module.css";

class Header extends Component {
  render() {
    return (
      <div className="text-center mt-2">
        <div className="card-background"></div>
        <div className="useravatar">
          <img alt="cybersoft.edu.vn" src="images/cybersoft.png" />
        </div>
        <div className="card-info mb-3">
          <span className="card-title">
            CyberSoft.edu.vn - Đào tạo chuyên gia lập trình - Dự án thử đồ trực
            tuyến - Virtual Dressing Room
          </span>
        </div>
        <hr className={classes.style13} />
      </div>
    );
  }
}

export default Header;
