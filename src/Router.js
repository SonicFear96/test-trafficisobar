import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ExamplePage } from "./pages/ExamplePage";
import './style.css'
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

export const Router = () => {
  return (
      <>
    <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/example" exact component={ExamplePage} />
        </Switch>
      </BrowserRouter>
      <Footer/>
      </>
  );
};
