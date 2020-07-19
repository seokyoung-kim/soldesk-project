import React from "react";
import { Route, Switch } from "@material-ui/core";
import SigninPage from "./pages/SigninPage";

const Routes = () => {
    <>
    <Switch>
        <Route path="/signin" component={SigninPage}/>
        {/* <Route /> */}
        <Route />
        <Route />
        <Route />
    </Switch>
    </>
}

export default Routes;