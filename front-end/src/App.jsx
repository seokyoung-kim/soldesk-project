import React from "react";
import MediaCard from "./components/CardList/MediaCard";
import CustomizedTabs from "./components/CardList/CustomizedTabs";
import MyPage from "./pages/MyPage";
import SelectCombo from "./components/Selector/SelectCombo";
import LoginField from "./components/Field/LoginField";
import PwdField from "./components/Field/PwdField";



const App = () => {
    return (
        <>
        <CustomizedTabs />
        <MediaCard />
        <MediaCard />
        <MyPage />
        <SelectCombo/>
        <LoginField/>
        <PwdField/>
        </>
    )
};

export default App;
