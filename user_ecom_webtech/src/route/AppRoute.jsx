import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PrivacyPage from "../pages/PrivacyPage";
import PurchasePage from "../pages/PurchasePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import UpdateProductPage from "../pages/UpdateProductPage";
import ViewProdcutPage from "../pages/ViewProductPage";
import AboutPage from "../pages/AboutPage";
import MainNavbar from "../components/common/MainNavbar";
import HomeSlider from "../components/home/HomeSlider";
import FooterDesktop from "../components/common/FooterDesktop";
import Hero from "../components/common/Hero";
import ProductApp from "../components/common/Product/ProductApp";
import ViewProduct from "../components/ViewProduct/ViewProduct";
import UpdateDeleteProduct from "../components/UpdateDelete/UpdateDeleteProduct";
import AddProduct from "../components/AddProduct/AddProduct";
import EditProduct from "../components/UpdateDelete/EditPage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/purchase" component={PurchasePage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/updateproduct/id" component={UpdateProductPage} />
          <Route path="/viewproductpage" component={ViewProdcutPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={UserLoginPage} />
          <Route exact path="/hero" component={Hero} />
          <Route path="/product-app" component={ProductApp} />
          <Route path="/viewproduct" component={ViewProduct} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/editproduct/id" component={EditProduct} />
          <Route
            path="/updatedeleteproduct/id"
            component={UpdateDeleteProduct}
          />
        </Router>
      </Fragment>
    );
  }
}

export default AppRoute;
