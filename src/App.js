import React from 'react';
import "./App.css";
import "./Part.css";
import { Header } from './Components/Header';
import { Banner } from './Components/Banner';
import { About } from './Components/About';
import { Hottopic } from './Components/Hottopic';
import { Cta } from './Components/Cta';
import { Footer } from './Components/Footer';
import { OurBlog } from './Components/OurBlog';
import { Tutorial } from './Components/Tutorial';
import { FrontendPannel } from './Components/FrontendPannel';
import Textominal from './Components/Textominal';

const App = () => {
  return (
    <>
      <Header about="Shashikant" />
      <Banner />
      <About />
      <Tutorial />
      <Hottopic />
      <FrontendPannel />
      <Textominal />
      <OurBlog />
      <Cta />
      <Footer />
    </>
  )
}

export default App;
