import React from "react";
import { Route, Switch } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import IntroPage from "./pages/IntroPage";
import CommunityPage from "./pages/CommunityPage";


const Routes = () => {
    return(
    <>
    <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/about" component={IntroPage}/>
        <Route path="/community" component={CommunityPage}/>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/mypage" component={MyPage}/>
    </Switch>
    </>
    )
}

export default Routes;