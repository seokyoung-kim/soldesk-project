import React from "react";
import { Route, Switch } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";

const Routes = () => {
    return(
    <>
    <Switch>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/mypage" component={MyPage}/>
        
        {/* <Route /> */}
        <Route exact path="/" component={MainPage}/>
        <Route />
        <Route />
    </Switch>
    </>
    )
}

export default Routes;