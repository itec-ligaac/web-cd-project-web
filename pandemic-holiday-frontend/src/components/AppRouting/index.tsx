import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { CovidData } from "../CovidData";
import { TravelData } from "../TravelData";

import { Layout, Menu } from "antd";
import { LandingPage } from "../LandingPage";

const { Header, Footer, Content } = Layout;

export const AppRouting = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh", width: "100vw" }}>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/landingpage">Home</Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/travel">Travel destinations</Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/covid">COVID 19 Information and updates</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "50px",
            marginTop: "50px",
          }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380, backgroundColor: "white" }}
          >
            <Switch>
              <Route exact path="/covid">
                <CovidData />
              </Route>

              <Route path="/travel">
                <TravelData />
              </Route>

              <Route path="/landingpage">
                <LandingPage />
              </Route>
              <Redirect to="/landingpage" />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {" ©2021 Created by Catalin Chita & Daniel Daianu"}
        </Footer>
      </Layout>
    </Router>
  );
};
