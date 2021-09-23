import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import ShorteningForm from './containers/ShorteningForm';
import ShortenedUrls from './containers/ShortenedUrls';
import ProductOffering from './components/ProductOffering';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SectionContainer from './hoc/SectionContainer'

function App() {
  useEffect(() => {
    import('./js/main');
  });

  return (
    <div className="App">
      <Navigation />      

      <main>
        <SectionContainer sectionName="intro">
          <Intro />
        </SectionContainer>

        <SectionContainer sectionName="page-content">
          <ShorteningForm />
          <ShortenedUrls />
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
}

export default App;
