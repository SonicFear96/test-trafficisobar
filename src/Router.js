import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ExamplePage } from "./pages/ExamplePage";
import "./style.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/main" />
          <Route path="/main" exact component={MainPage} />
          <Route path="/example" exact component={ExamplePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};
