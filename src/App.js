import React from 'react';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import ShorteningApp from './containers/ShorteningApp';
import ProductOffering from './components/ProductOffering';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SectionContainer from './hoc/SectionContainer'

const App = () => (
  <div className="App">
    <Navigation />      

    <main>
      <SectionContainer sectionName="intro">
        <Intro />
      </SectionContainer>

      <SectionContainer sectionName="page-content">
        <ShorteningApp />
        <ProductOffering />
      </SectionContainer>

      <SectionContainer 
        sectionName="call-to-action" 
        sectionClasses={["bg-dark-violet"]}
        containerClasses={['flow-content']}
      >
        <CallToAction />
      </SectionContainer>
    </main>

    <Footer />
  </div>
);

export default App;
