import React, { Component } from "react";
import ProductItem from "../productItem/productItem";
import { connect } from "react-redux";

class Products extends Component {
  renderProduct = () => {
    return this.props.products
      .filter((item) => item.type === this.props.chosenCategories)
      .map((item, index) => {
        return (
          <div className="col-4 mb-2" key={index}>
            <ProductItem product={item} />
          </div>
        );
      });
  };
  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.ProductsReducer,
    chosenCategories: state.ChosenCategoriesReducer,
  };
};

export default connect(mapStateToProps)(Products);
