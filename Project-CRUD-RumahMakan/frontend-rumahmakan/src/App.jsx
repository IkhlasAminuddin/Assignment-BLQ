import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from "./pages/Header/HeaderNav";
import MenuPage from "./pages/Homepage/MenuPage";
import Awalan from "./pages/Awalan/Awalan";
import ProductPage from "./pages/Product/ProductPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: "",
    };
  }


  render() {
    return (
      <>
        <BrowserRouter>
          <div className="wrapper">
          <HeaderNav />
            <div className="content-wrapper">
              <div className="content-header">
                <div className="container-fluid">
                  <Routes>
                    <Route exact path="/" element={<Awalan/>}></Route>
                    <Route path="/Admin" element={<ProductPage/>}></Route>
                    <Route path="/Menu" element={<MenuPage />}></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
