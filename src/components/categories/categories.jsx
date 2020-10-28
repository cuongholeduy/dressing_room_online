import React, { Component } from "react";
import { connect } from "react-redux";

class Categories extends Component {
  renderCategories = () => {
    return this.props.categoriesList.map((item, index) => {
      return (
        <button
          onClick={() => {
            this.handleChooseCategories(item.type);
          }}
          className="btn btn-primary px-4"
          key={index}
        >
          {item.showName}
        </button>
      );
    });
  };

  handleChooseCategories = (payload) => {
    this.props.dispatch({
      type: "CHOOSE_CATEGORIES",
      payload: payload,
    });
  };

  render() {
    return (
      <div className="btn-group btn-group-justified my-4">
        {this.renderCategories()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoriesList: state.CategoriesReducer,
  };
};

export default connect(mapStateToProps)(Categories);
