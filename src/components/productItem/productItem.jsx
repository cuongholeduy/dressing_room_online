import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  handleSetClothes = () => {
    this.props.dispatch({
      type: "SET_CLOTHES",
      payload: {
        type: this.props.product.type,
        img: this.props.product.imgSrc_png,
      },
    });
  };

  render() {
    const { name, imgSrc_jpg } = this.props.product;
    return (
      <div
        className="card"
        style={{
          width: 200,
        }}
      >
        <img className="card-img-top img-fluid" src={imgSrc_jpg} alt={name} />
        <div className="card-body text-center">
          <h4 className="card-title">{name}</h4>
          <button onClick={this.handleSetClothes} className="btn btn-success">
            Try
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(ProductItem);
