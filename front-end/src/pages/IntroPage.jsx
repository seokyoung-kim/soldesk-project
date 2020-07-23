import React from "react";
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Footer from './Footer';

import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = {
    title: 'For Developers',
  //   description:
  //     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
  //   linkText: 'Continue reading…',
  };


const IntroPage = () => {
    return (
        <>
        <React.Fragment>
           <CssBaseline /> {/* 브라우저 상관없이 일괄적인 스타일 적용*/}
           <Container maxWidth="lg">
           <Header title="개발세발" />
            <MainFeaturedPost post={mainFeaturedPost} />



           <Footer/>
           </Container>
       </React.Fragment>
       </>
    )
}

export default IntroPage;