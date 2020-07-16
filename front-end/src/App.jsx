import React from "react";
import MediaCard from "./components/CardList/MediaCard";
import CustomizedTabs from "./components/CardList/CustomizedTabs";
import MyPage from "./pages/MyPage";

const App = () => {
    return (
        <>
        <CustomizedTabs />
        <MediaCard />
        <MediaCard />
        
        <MyPage />
        </>
    )
};

export default App;
