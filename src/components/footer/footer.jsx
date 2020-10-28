import React, { Component } from "react";
import classes from "./style.module.css";

class Footer extends Component {
  render() {
    return (
      <div className="my-3">
        <hr className={classes.style13} />
        <div className="card-info text-center">
          <span className="card-title">
            @Copyright 2018- CyberSoft.edu.vn - MyClass.vn
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
