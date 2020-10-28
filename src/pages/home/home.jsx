import React, { Component } from "react";
import Header from "../../components/header/header";
import Categories from "../../components/categories/categories";
import Model from "../../components/model/model";
import Footer from "../../components/footer/footer";
import Products from "../../components/products/products";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <Categories />
              <Products />
            </div>
            <div className="col-6">
              <Model />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
