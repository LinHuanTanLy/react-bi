import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "../pages/Main/Layout";
import BottomNav from "../components/BottomNav";
import Home from "../pages/Main/Home";
import Trends from "../pages/Main/Trends";
import Shop from "../pages/Main/Shop";
import Mine from "../pages/Main/Mine";
import Message from "../pages/Message";
const AppRouter = () => {
    return <Router>
        <Switch>
            <Route exact path="/message" component={Message} />
            <Layout path="/">
                <BottomNav></BottomNav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/trends" component={Trends} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/mine" component={Mine} />
                </Switch>
            </Layout>
        </Switch>
    </Router>
}

export default AppRouter