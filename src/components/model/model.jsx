import React, { Component } from "react";
import classes from "./style.module.css";
import { connect } from "react-redux";

class Model extends Component {
  render() {
    return (
      <div
        className={classes.contain}
        style={{
          background: `url(${this.props.setClothes.background})`,
        }}
      >
        <div
          className={classes.body}
          style={{
            background: "url(images/allbody/bodynew.png)",
          }}
        ></div>
        <div
          className={classes.model}
          style={{
            background: "url(images/model/1000new.png)",
          }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{
            background: "url(images/allbody/bikini_branew.png)",
          }}
        ></div>
        <div
          className={classes.bikinibottom}
          style={{
            background: "url(images/allbody/bikini_pantsnew.png)",
          }}
        ></div>
        <div
          className={classes.feetleft}
          style={{
            background: "url(images/allbody/feet_high_leftnew.png)",
          }}
        ></div>
        <div
          className={classes.feetright}
          style={{
            background: "url(images/allbody/feet_high_rightnew.png)",
          }}
        ></div>
        {/* ===================================================== */}

        {/* bottom clothes */}
        <div
          className={classes.bikinibottom}
          style={{
            backgroundImage: `url(${this.props.setClothes.botclothes})`,
            backgroundSize: "cover",
          }}
        ></div>

        {/* top clothes */}
        <div
          className={classes.bikinitop}
          style={{
            backgroundImage: `url(${this.props.setClothes.topclothes})`,
            backgroundSize: "cover",
          }}
        ></div>

        {/* hand bag */}
        <div
          className={classes.handbagStyle}
          style={{
            backgroundImage: `url(${this.props.setClothes.handbags})`,
          }}
        ></div>

        {/* hair style */}
        <div
          className={classes.hairStyle}
          style={{
            backgroundImage: `url(${this.props.setClothes.hairstyle})`,
          }}
        ></div>

        {/* shoes */}
        <div
          className={classes.feetStyle}
          style={{
            backgroundImage: `url(${this.props.setClothes.shoes})`,
          }}
        ></div>

        {/* necklaces */}
        <div
          className={classes.necklacesStyle}
          style={{
            backgroundImage: `url(${this.props.setClothes.necklaces})`,
          }}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setClothes: state.SetClothesReducer,
  };
};

export default connect(mapStateToProps)(Model);
