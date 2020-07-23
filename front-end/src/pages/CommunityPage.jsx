import React from "react";
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Footer from './Footer';

const CommunityPage = () => {
    return (
        <>
        <React.Fragment>
           <CssBaseline /> {/* 브라우저 상관없이 일괄적인 스타일 적용*/}
           <Container maxWidth="lg">
           <Header title="개발세발" />
           {/* <SignIn /> */}
           <Footer/>
           </Container>
       </React.Fragment>
       </>
    )
}

export default CommunityPage;