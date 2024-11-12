// 3) Write the necessary React code for generating the below figure (using flex).

import ExtraContent from './components/ExtraContent';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import RelatedImages from './components/RelatedImages';
import RelatedPosts from './components/RelatedPosts';
import Sidebar from './components/Sidebar';

function ReactStructure() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', rowGap: '1rem', width: '100vw', height: '100vh'}}>
      <Header />

      <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '60%', columnGap: '0.5rem'}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '40%', height: '100%', rowGap: '1rem'}}>
          <Hero />

          <Sidebar />
        </div>

        <div style={{display: 'flex', flexDirection: 'column', width: '60%', height: '100%', rowGap: '1rem'}}>
          <MainContent />

          <ExtraContent />
        </div>
      </div>

      <div style={{display: 'flex', height: '20%', columnGap: '0.5rem'}}>
        <RelatedImages />

        <RelatedPosts />
      </div>

      <Footer />
    </div>
  );
}

export default ReactStructure;
