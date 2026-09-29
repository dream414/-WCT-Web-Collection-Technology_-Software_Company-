import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Component/Navbar';
import HeroSectionSingleRotate from './Component/HeroSectionSingleRotate';
import About from './Component/About';
import About2 from './Component/About2';
import Skills from './Component/Skills';
import ProgressMetrics from './Component/ProgressMatrics';
import Slider from './Component/Slider';
import Testimonials from './Component/Testimonials';
import Services from './Component/Services';
import Contribution from './Component/Contribution';
import ContactSection from './Component/ContactSection';
import Footer from './Component/Footer';
import Project from './Component/Project';
import LatestProject from './Component/LatestProject';

/* Pages (ONE–ELEVEN) */
import Gis from "./pages/gis";
import CompanyInfo from './Component/CompanyInfo';
import MissionSection from './Component/MissionSection';
import WhatWeDo from './Component/WhatWeDo';
import WhyWCT from './Component/WhyWCT';
import PeopleBehindWCT from './Component/PeopleBehindWCT';
import Mapsslider from './Component/Mapsslider';
// import Two from "./Pages/Two";
// import Three from "./Pages/Three";
// import Four from "./Pages/Four";
// import Five from "./Pages/Five";
// import Six from "./Pages/Six";
// import Seven from "./Pages/Seven";
// import Eight from "./Pages/Eight";
// import Nine from "./Pages/Nine";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME – your existing layout */}
        <Route
          path="/"
          element={
            <>
              <HeroSectionSingleRotate />
              <CompanyInfo/>
              <About2 />
              <About />
              <MissionSection/>
              <PeopleBehindWCT/>
              {/* <About2 /> */}
              <WhatWeDo/>
                 <WhyWCT/>
              <Skills />
              <ProgressMetrics />
              <Project />
              <LatestProject />
               <Services />
              <Slider />
              <Mapsslider/>
              <Testimonials />
             
             
              <Contribution />
            
              <ContactSection />
              <Footer />
            </>
          }
        />

        {/* EXTRA ROUTES */}
        <Route path="/gis" element={<Gis />} />
        {/* <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/nine" element={<Nine />} /> */}


      </Routes>

    </BrowserRouter>
  );
}

export default App;
